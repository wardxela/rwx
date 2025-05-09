import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { CategoriesModule } from "src/categories/categories.module";
import { FilesModule } from "src/files/files.module";
import { UsersModule } from "src/users/users.module";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";

@Module({
  imports: [AuthModule, FilesModule, CategoriesModule, UsersModule],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
