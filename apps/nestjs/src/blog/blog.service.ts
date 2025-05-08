import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { FilesService } from "src/files/files.service";
import { CommentCreateDto } from "./dto/comment-create.dto";
import { CommentDto } from "./dto/comment.dto";
import { PostCreateDto } from "./dto/post-create.dto";
import { PostFiltersDto, PostHiddenFilters } from "./dto/post-filters.dto";
import { PostUpdateDto } from "./dto/post-update.dto";
import { PostDto, PostsDto } from "./dto/post.dto";

@Injectable()
export class BlogService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private filesService: FilesService,
  ) {}

  async createPost(authorId: string, data: PostCreateDto): Promise<string> {
    const { id } = await this.db
      .insertInto("BlogPost")
      .values({
        authorId,
        title: data.title,
        content: {},
        updatedAt: new Date(),
      })
      .returning(["BlogPost.id"])
      .executeTakeFirstOrThrow();
    return id;
  }

  async updatePost(id: string, data: PostUpdateDto): Promise<void> {
    const { tags, ...dto } = data;
    return this.db.transaction().execute(async (trx) => {
      await trx
        .updateTable("BlogPost")
        .set({
          ...dto,
          updatedAt: new Date(),
        })
        .where("BlogPost.id", "=", id)
        .execute();

      if (tags !== undefined) {
        await trx
          .deleteFrom("_BlogPostToTag")
          .where("_BlogPostToTag.A", "=", id)
          .execute();
        if (tags.length > 0) {
          await trx
            .insertInto("_BlogPostToTag")
            .values(
              tags.map((tagId) => ({
                A: id,
                B: tagId,
              })),
            )
            .execute();
        }
      }
    });
  }

  async deletePost(id: string): Promise<boolean> {
    const result = await this.db
      .deleteFrom("BlogPost")
      .where("id", "=", id)
      .executeTakeFirst();
    return result.numDeletedRows > 0;
  }

  async getPosts(
    filters: PostFiltersDto & PostHiddenFilters,
  ): Promise<PostsDto> {
    let postIdsQuery = this.db.selectFrom("BlogPost");

    if (filters.published !== undefined) {
      postIdsQuery = postIdsQuery.where(
        "BlogPost.published",
        "=",
        filters.published,
      );
    }

    if (filters.search) {
      postIdsQuery = postIdsQuery.where((eb) =>
        eb.or([
          eb(
            "BlogPost.title",
            "ilike",
            `%${filters.search?.split("").join("%")}%`,
          ),
          eb(
            "BlogPost.excerpt",
            "ilike",
            `%${filters.search?.split("").join("%")}%`,
          ),
        ]),
      );
    }

    if (filters.authorId) {
      postIdsQuery = postIdsQuery.where("authorId", "=", filters.authorId);
    }

    const categories = filters.categories
      ? Array.isArray(filters.categories)
        ? filters.categories
        : [filters.categories]
      : [];

    if (categories.length > 0) {
      postIdsQuery = postIdsQuery.where(
        "BlogPost.categoryId",
        "in",
        categories,
      );
    }

    const tags = filters.tags
      ? Array.isArray(filters.tags)
        ? filters.tags
        : [filters.tags]
      : [];

    if (tags.length > 0) {
      postIdsQuery = postIdsQuery.where((eb) =>
        eb.exists(
          eb
            .selectFrom("_BlogPostToTag")
            .whereRef("_BlogPostToTag.A", "=", "BlogPost.id")
            .where("_BlogPostToTag.B", "in", tags),
        ),
      );
    }

    const total = await postIdsQuery
      .select(({ fn }) => [fn.count("BlogPost.id").as("count")])
      .executeTakeFirstOrThrow();

    const pageSize = filters.limit ?? 20;
    const offset = filters.offset ?? 0;

    const postIds = await postIdsQuery
      .select("BlogPost.id")
      .orderBy("BlogPost.updatedAt", "desc")
      .limit(pageSize)
      .offset(offset)
      .execute();

    if (postIds.length === 0) {
      return {
        page: [],
        total: Number(total.count),
      };
    }

    const rows = await this.db
      .selectFrom("BlogPost")
      .where(
        "BlogPost.id",
        "in",
        postIds.map((p) => p.id),
      )
      .leftJoin("User", "User.id", "BlogPost.authorId")
      .leftJoin("Category", "Category.id", "BlogPost.categoryId")
      .leftJoin("_BlogPostToTag", "_BlogPostToTag.A", "BlogPost.id")
      .leftJoin("Tag", "Tag.id", "_BlogPostToTag.B")
      .select([
        "BlogPost.id",
        "BlogPost.title",
        "BlogPost.content",
        "BlogPost.excerpt",
        "BlogPost.image",
        "BlogPost.published",
        "BlogPost.createdAt",
        "BlogPost.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
        "Category.id as categoryId",
        "Category.name as categoryName",
        "Category.description as categoryDescription",
        "Tag.id as tagId",
        "Tag.name as tagName",
      ])
      .orderBy("BlogPost.updatedAt", "desc")
      .execute();

    const postsMap = new Map<string, PostDto>();

    for (const row of rows) {
      if (!postsMap.has(row.id)) {
        postsMap.set(row.id, {
          id: row.id,
          title: row.title,
          content: row.content,
          excerpt: row.excerpt,
          image: row.image ? this.filesService.resolve(row.image) : null,
          published: row.published,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt,
          author: {
            id: row.authorId!,
            firstName: row.authorFirstName!,
            lastName: row.authorLastName!,
            image: row.authorImage
              ? this.filesService.resolve(row.authorImage)
              : null,
            bio: row.authorBio,
          },
          category: row.categoryId
            ? {
                id: row.categoryId!,
                name: row.categoryName!,
              }
            : undefined,
          tags: [],
        });
      }
      if (row.tagId) {
        postsMap.get(row.id)?.tags.push({
          id: row.tagId,
          name: row.tagName!,
        });
      }
    }

    return {
      page: Array.from(postsMap.values()),
      total: Number(total.count),
    };
  }

  async getPost(id: string): Promise<PostDto | null> {
    const rows = await this.db
      .selectFrom("BlogPost")
      .where("BlogPost.id", "=", id)
      .leftJoin("User", "User.id", "BlogPost.authorId")
      .leftJoin("Category", "BlogPost.categoryId", "Category.id")
      .leftJoin("_BlogPostToTag", "_BlogPostToTag.A", "BlogPost.id")
      .leftJoin("Tag", "Tag.id", "_BlogPostToTag.B")
      .leftJoin("BlogPostComment", "BlogPostComment.postId", "BlogPost.id")
      .select([
        "BlogPost.id",
        "BlogPost.title",
        "BlogPost.content",
        "BlogPost.excerpt",
        "BlogPost.image",
        "BlogPost.published",
        "BlogPost.createdAt",
        "BlogPost.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
        "Category.id as categoryId",
        "Category.name as categoryName",
        "Category.description as categoryDescription",
        "Tag.id as tagId",
        "Tag.name as tagName",
        ({ fn }) => fn.count("BlogPostComment.id").as("commentsCount"),
      ])
      .groupBy(["BlogPost.id", "User.id", "Category.id", "Tag.id"])
      .execute();

    if (!rows.length) {
      return null;
    }

    const [post] = rows;

    return {
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image ? this.filesService.resolve(post.image) : null,
      published: post.published,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      commentsCount: post.commentsCount,
      author: {
        id: post.authorId!,
        firstName: post.authorFirstName!,
        lastName: post.authorLastName!,
        image: post.authorImage
          ? this.filesService.resolve(post.authorImage)
          : null,
        bio: post.authorBio,
      },
      category: post.categoryId
        ? {
            id: post.categoryId!,
            name: post.categoryName!,
          }
        : undefined,
      tags: rows
        .filter((r) => r.tagId !== null)
        .map((r) => ({
          id: r.tagId!,
          name: r.tagName!,
        })),
    };
  }

  async getPostComments(postId: string): Promise<CommentDto[]> {
    const comments = await this.db
      .selectFrom("BlogPostComment")
      .where("BlogPostComment.postId", "=", postId)
      .innerJoin("User", "User.id", "BlogPostComment.authorId")
      .select([
        "BlogPostComment.id",
        "BlogPostComment.postId",
        "BlogPostComment.content",
        "BlogPostComment.createdAt",
        "BlogPostComment.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
      ])
      .execute();
    return comments.map((comment) => ({
      id: comment.id,
      postId: comment.postId,
      content: comment.content,
      author: {
        id: comment.authorId,
        firstName: comment.authorFirstName,
        lastName: comment.authorLastName,
        image: comment.authorImage,
        bio: comment.authorBio,
      },
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }));
  }

  async leaveComment(
    authorId: string,
    postId: string,
    comment: CommentCreateDto,
  ): Promise<boolean> {
    try {
      await this.db
        .insertInto("BlogPostComment")
        .values({
          authorId,
          postId,
          content: comment.content,
          updatedAt: new Date(),
        })
        .executeTakeFirstOrThrow();
      return true;
    } catch {
      return false;
    }
  }
}
