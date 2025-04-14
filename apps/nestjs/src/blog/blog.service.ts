import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostFiltersDto } from "./dto/post-filters.dto";
import { PostDto } from "./dto/post.dto";
import { UpdateBlogPostDto } from "./dto/update-blog-post.dto";

@Injectable()
export class BlogService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

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

  // async updatePost(
  //   id: string,
  //   authorId: string,
  //   data: UpdateBlogPostDto,
  // ): Promise<PostDto> {}
  //

  async deletePost(id: string, authorId: string): Promise<boolean> {
    const result = await this.db
      .deleteFrom("BlogPost")
      .where("id", "=", id)
      .where("authorId", "=", authorId)
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
          image: row.image,
          published: row.published,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt,
          author: {
            id: row.authorId!,
            firstName: row.authorFirstName!,
            lastName: row.authorLastName!,
            image: row.authorImage,
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
    const rows = await this.db
      .selectFrom("BlogPost")
      .where("BlogPost.published", "=", true)
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
          image: row.image,
          published: row.published,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt,
          author: {
            id: row.authorId!,
            firstName: row.authorFirstName!,
            lastName: row.authorLastName!,
            image: row.authorImage,
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
      image: post.image,
      published: post.published,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      author: {
        id: post.authorId!,
        firstName: post.authorFirstName!,
        lastName: post.authorLastName!,
        image: post.authorImage,
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
