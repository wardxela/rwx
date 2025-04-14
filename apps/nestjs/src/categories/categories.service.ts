import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { CategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async findAll(): Promise<CategoryDto[]> {
    return this.db.selectFrom("Category").selectAll().execute();
  }
}
