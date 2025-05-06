import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { CategoriesModule } from "src/categories/categories.module";
import { FilesModule } from "src/files/files.module";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
  imports: [AuthModule, FilesModule, CategoriesModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
