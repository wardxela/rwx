import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { CategoryDto, CategoryDtoCounted } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async findAll(): Promise<CategoryDto[]> {
    return this.db.selectFrom("Category").selectAll().execute();
  }

  async findAllWithPublishedPostsCount(): Promise<CategoryDtoCounted[]> {
    return this.db
      .selectFrom("Category")
      .leftJoin("BlogPost", "BlogPost.categoryId", "Category.id")
      .select(({ fn }) => [
        "Category.id",
        "Category.name",
        "Category.description",
        fn.count("BlogPost.id").as("count"),
      ])
      .groupBy("Category.id")
      .orderBy("count", "desc")
      .execute();
  }

  async findAllWithPublishedCoursesCount(): Promise<CategoryDtoCounted[]> {
    return this.db
      .selectFrom("Category")
      .leftJoin("Course", "Course.categoryId", "Category.id")
      .select(({ fn }) => [
        "Category.id",
        "Category.name",
        "Category.description",
        fn.count("Course.id").as("count"),
      ])
      .groupBy("Category.id")
      .orderBy("count", "desc")
      .execute();
  }
}
