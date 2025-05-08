import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { FilesModule } from "src/files/files.module";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";

@Module({
  imports: [AuthModule, FilesModule],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
