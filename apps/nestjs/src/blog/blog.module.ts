import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
  imports: [AuthModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
