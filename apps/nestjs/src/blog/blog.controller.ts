import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { Roles } from "src/auth/guards/roles.decorator";
import { SessionGuard } from "src/auth/guards/session.guard";
import { BlogService } from "./blog.service";
import { CreateBlogPostDto } from "./dto/create-post.dto";

@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async createPost(
    @Req() req: Request,
    @Body() blogPost: CreateBlogPostDto,
  ): Promise<void> {
    await this.blogService.create(req.user!.id, blogPost);
  }
}
