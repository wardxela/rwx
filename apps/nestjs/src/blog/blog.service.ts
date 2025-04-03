import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import slug from "slug";
import { CreateBlogPostDto } from "./dto/create-post.dto";

@Injectable()
export class BlogService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async create(authorId: string, data: CreateBlogPostDto): Promise<boolean> {
    const post = await this.db
      .insertInto("BlogPost")
      .values({
        authorId,
        title: data.title,
        categoryId: data.category,
        slug: slug(data.title),
        content: "",
        updatedAt: new Date(),
      })
      .returningAll()
      .executeTakeFirstOrThrow();
    return true;
  }
}
