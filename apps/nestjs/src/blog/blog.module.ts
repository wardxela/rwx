import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { FilesModule } from "src/files/files.module";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
  imports: [AuthModule, FilesModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
