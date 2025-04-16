import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { filter } from "rxjs";
import { FilesService } from "src/files/files.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostFiltersDto } from "./dto/post-filters.dto";
import { PostDto } from "./dto/post.dto";
import { UpdateBlogPostDto } from "./dto/update-blog-post.dto";

@Injectable()
export class BlogService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private filesService: FilesService,
  ) {}

  async createPost(authorId: string, data: CreatePostDto): Promise<PostDto> {
    const { id: postId } = await this.db
      .insertInto("BlogPost")
      .values({
        authorId,
        title: data.title,
        content: {},
        updatedAt: new Date(),
      })
      .returning(["BlogPost.id"])
      .executeTakeFirstOrThrow();
    return (await this.getPost(postId))!;
  }

  async updatePost(id: string, data: UpdateBlogPostDto): Promise<void> {
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

  async getPostsByAuthor(authorId: string): Promise<PostDto[]> {
    const rows = await this.db
      .selectFrom("BlogPost")
      .where("authorId", "=", authorId)
      .leftJoin("User", "User.id", "BlogPost.authorId")
      .leftJoin("Category", "BlogPost.categoryId", "Category.id")
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

    return Array.from(postsMap.values());
  }

  async getAllPosts(filters: PostFiltersDto): Promise<PostDto[]> {
    let postIdsQuery = this.db
      .selectFrom("BlogPost")
      .select("BlogPost.id")
      .where("BlogPost.published", "=", true)
      .leftJoin("Category", "BlogPost.categoryId", "Category.id");

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

    const categories = filters.categories
      ? Array.isArray(filters.categories)
        ? filters.categories
        : [filters.categories]
      : [];

    if (categories.length > 0) {
      postIdsQuery = postIdsQuery.where("Category.id", "in", categories);
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

    const postIds = await postIdsQuery
      .orderBy("BlogPost.updatedAt", "desc")
      .limit(filters.limit ?? 20)
      .execute();

    if (postIds.length === 0) {
      return [];
    }

    const rows = await this.db
      .selectFrom("BlogPost")
      .where(
        "BlogPost.id",
        "in",
        postIds.map((p) => p.id),
      )
      .leftJoin("User", "User.id", "BlogPost.authorId")
      .leftJoin("Category", "BlogPost.categoryId", "Category.id")
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

    return Array.from(postsMap.values());
  }

  async getPost(id: string): Promise<PostDto | null> {
    const rows = await this.db
      .selectFrom("BlogPost")
      .where("BlogPost.id", "=", id)
      .leftJoin("User", "User.id", "BlogPost.authorId")
      .leftJoin("Category", "BlogPost.categoryId", "Category.id")
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
}
