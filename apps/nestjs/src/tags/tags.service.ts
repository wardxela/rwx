import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { TagCreateDto } from "./dto/tag-create.dto";
import { TagDto } from "./dto/tag.dto";

@Injectable()
export class TagsService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async findAll(): Promise<TagDto[]> {
    return this.db
      .selectFrom("Tag")
      .selectAll()
      .orderBy("id", "desc")
      .execute();
  }

  async create(tag: TagCreateDto): Promise<number | null> {
    const existingTag = await this.db
      .selectFrom("Tag")
      .selectAll()
      .where("name", "=", tag.name)
      .executeTakeFirst();

    if (existingTag) {
      return null;
    }

    const result = await this.db
      .insertInto("Tag")
      .values(tag)
      .returningAll()
      .executeTakeFirstOrThrow();

    return result.id;
  }
}
