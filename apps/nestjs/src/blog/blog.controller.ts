import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";
import { Roles } from "src/auth/guards/roles.decorator";
import { SessionGuard } from "src/auth/guards/session.guard";
import { BlogService } from "./blog.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostFiltersDto } from "./dto/post-filters.dto";
import { PostDto, PostsDto } from "./dto/post.dto";
import { UpdateBlogPostDto } from "./dto/update-blog-post.dto";

@Controller("blog")
export class BlogController {
  constructor(private readonly service: BlogService) {}

  @Post()
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async createPost(
    @Req() req: Request,
    @Body() blogPost: CreatePostDto,
  ): Promise<PostDto> {
    return this.service.createPost(req.user!.id, blogPost);
  }

  @Get("my-posts")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async getMyPosts(@Req() req: Request): Promise<PostsDto> {
    return this.service.getPosts({
      authorId: req.user!.id,
    });
  }

  @Get("posts")
  async getAllPosts(@Query() filters: PostFiltersDto): Promise<PostsDto> {
    return this.service.getPosts({
      ...filters,
      published: true,
    });
  }

  @Get("posts/:id")
  async getPost(
    @Req() req: Request,
    @Param("id") id: string,
  ): Promise<PostDto> {
    const post = await this.service.getPost(id);
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    if (!post.published && post.author.id !== req?.user?.id) {
      throw new ForbiddenException("The post is not available yet");
    }
    return post;
  }

  @Delete("posts/:id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async deletePost(
    @Req() req: Request,
    @Param("id") id: string,
  ): Promise<boolean> {
    const post = await this.service.getPost(id);
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    if (post.author.id !== req.user!.id) {
      throw new ForbiddenException("You are not the author of this post");
    }
    return this.service.deletePost(id);
  }

  @Put("posts/:id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async updatePost(
    @Param("id") id: string,
    @Body() updateData: UpdateBlogPostDto,
    @Req() req: Request,
  ): Promise<boolean> {
    const post = await this.service.getPost(id);
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    if (post.author.id !== req.user!.id) {
      throw new ForbiddenException("You are not the author of this post");
    }
    await this.service.updatePost(id, updateData);
    return true;
  }
}
