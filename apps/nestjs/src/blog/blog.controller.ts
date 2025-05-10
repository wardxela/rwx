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
  Res,
  UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";
import { Roles } from "src/auth/guards/roles.decorator";
import { SessionGuard } from "src/auth/guards/session.guard";
import { CategoriesService } from "src/categories/categories.service";
import { BlogService } from "./blog.service";
import { CommentCreateDto } from "./dto/comment-create.dto";
import { CommentDto } from "./dto/comment.dto";
import { PostCreateDto } from "./dto/post-create.dto";
import { PostFiltersDto } from "./dto/post-filters.dto";
import { PostUpdateDto } from "./dto/post-update.dto";
import { PostDto, PostsDto } from "./dto/post.dto";

@Controller("blog")
export class BlogController {
  constructor(
    private readonly service: BlogService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get("posts")
  async getAllPosts(@Query() filters: PostFiltersDto): Promise<PostsDto> {
    return this.service.getPosts({
      ...filters,
      published: true,
    });
  }

  @Get("posts/mine")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async getMyPosts(
    @Req() req: Request,
    @Query() filters: PostFiltersDto,
  ): Promise<PostsDto> {
    return this.service.getPosts({
      ...filters,
      authorId: req.user!.id,
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

  @Get("posts/:id/comments")
  async getPostComments(@Param("id") postId: string): Promise<CommentDto[]> {
    return this.service.getPostComments(postId);
  }

  @Post("posts")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async createPost(
    @Req() req: Request,
    @Res() res: Response,
    @Body() blogPost: PostCreateDto,
  ) {
    return res.json(await this.service.createPost(req.user!.id, blogPost));
  }

  @Put("posts/:id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async updatePost(
    @Param("id") id: string,
    @Body() updateData: PostUpdateDto,
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

  @Post("posts/:id/comments")
  @UseGuards(SessionGuard)
  async leavePostComment(
    @Req() req: Request,
    @Param("id") postId: string,
    @Body() blogPost: CommentCreateDto,
  ): Promise<boolean> {
    const isLeft = this.service.leaveComment(req.user!.id, postId, blogPost);
    if (!isLeft) {
      throw new NotFoundException(`Post with id ${postId} not found`);
    }
    return isLeft;
  }

  @Get("categories")
  getCategories() {
    return this.categoriesService.findAllWithPublishedPostsCount();
  }
}
