import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { TagDto } from "./dto/tag.dto";

@Injectable()
export class TagsService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async findAll(): Promise<TagDto[]> {
    return this.db.selectFrom("Tag").selectAll().execute();
  }
}
