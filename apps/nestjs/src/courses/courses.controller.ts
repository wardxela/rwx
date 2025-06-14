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
import { CategoryCountedDto } from "src/categories/dto/category.dto";
import { UserCountedDto } from "src/users/dto/get-user.dto";
import { UsersService } from "src/users/users.service";
import { CoursesService } from "./courses.service";
import { CourseCreateDto } from "./dto/course-create.dto";
import { CourseFiltersDto } from "./dto/course-filters.dto";
import { CourseUpdateDto } from "./dto/course-update.dto";
import { CourseDto, CoursesDto } from "./dto/course.dto";
import { LessonDto, ModuleDto } from "./dto/module.dto";
import { ReviewCreateDto, ReviewDto } from "./dto/review.dto";

@Controller("courses")
export class CoursesController {
  constructor(
    private readonly service: CoursesService,
    private readonly categoriesService: CategoriesService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  async getAllCourses(@Query() filters: CourseFiltersDto): Promise<CoursesDto> {
    return this.service.getCourses({
      ...filters,
      published: true,
    });
  }

  @Get("mine")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async getMyCourses(
    @Req() req: Request,
    @Query() filters: CourseFiltersDto,
  ): Promise<CoursesDto> {
    return this.service.getCourses({
      ...filters,
      authors: [req.user!.id, ...(filters.authors ?? [])],
    });
  }

  @Get("categories")
  getCategories(): Promise<CategoryCountedDto[]> {
    return this.categoriesService.findAllWithPublishedCoursesCount();
  }

  @Get("authors")
  getAuthors(): Promise<UserCountedDto[]> {
    return this.usersService.getAllCourseAuthors();
  }

  @Get("reviews")
  getReviews(): Promise<ReviewDto[]> {
    return this.service.getReviews();
  }

  @Get("lessons/:id")
  async getCourseLesson(@Param("id") id: string): Promise<LessonDto> {
    return this.service.getCourseLesson(id);
  }

  @Get(":id")
  async getCourse(
    @Req() req: Request,
    @Param("id") id: string,
  ): Promise<CourseDto> {
    const course = await this.service.getCourse(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    if (!course.published && course.author.id !== req?.user?.id) {
      throw new ForbiddenException("The post is not available yet");
    }
    return course;
  }

  @Get(":id/structure")
  async getCourseStructure(@Param("id") id: string): Promise<ModuleDto[]> {
    return this.service.getCourseStructure(id);
  }

  @Get(":id/reviews")
  async getCourseReviews(@Param("id") id: string): Promise<ReviewDto[]> {
    return this.service.getCourseReviews(id);
  }

  @Get(":id/reviews/mine")
  @UseGuards(SessionGuard)
  async getCourseReview(
    @Req() req: Request,
    @Param("id") id: string,
  ): Promise<ReviewDto> {
    const review = await this.service.getCourseReviewByUserId(req.user!.id, id);
    if (!review) {
      throw new NotFoundException(`Review by user id ${id} not found`);
    }
    return review;
  }

  @Post()
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async createCourse(
    @Req() req: Request,
    @Res() res: Response,
    @Body() course: CourseCreateDto,
  ) {
    return res.json(await this.service.createCourse(req.user!.id, course));
  }

  @Post("/reviews/:id")
  @Roles(["ADMIN"])
  @UseGuards(SessionGuard)
  async approveReview(@Param("id") id: string) {
    await this.service.approveReview(id);
    return true;
  }

  @Post(":id/reviews")
  @UseGuards(SessionGuard)
  async leaveReview(
    @Req() req: Request,
    @Res() res: Response,
    @Param("id") id: string,
    @Body() review: ReviewCreateDto,
  ) {
    return res.json(await this.service.leaveReview(req.user!.id, id, review));
  }

  @Put(":id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async updateCourse(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() data: Partial<CourseUpdateDto>,
  ): Promise<void> {
    const course = await this.service.getCourse(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    if (course.author.id !== req.user!.id) {
      throw new ForbiddenException("You are not the author of this course");
    }
    await this.service.updateCourse(id, data);
  }

  @Delete(":id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async deleteCourse(
    @Req() req: Request,
    @Param("id") id: string,
  ): Promise<boolean> {
    const course = await this.service.getCourse(id);
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    if (course.author.id !== req.user!.id) {
      throw new ForbiddenException("You are not the author of this course");
    }
    return this.service.deleteCourse(id);
  }

  // @Post(":id/modules")
  // @Roles(["INSTRUCTOR"])
  // @UseGuards(SessionGuard)
  // async addModule(
  //   @Param("id") courseId: string,
  //   @Body("title") title: string,
  // ): Promise<string> {
  //   return this.service.addModule(courseId, title);
  // }

  // @Put("lessons/:id")
  // @Roles(["INSTRUCTOR"])
  // @UseGuards(SessionGuard)
  // async updateLesson(
  //   @Param("id") lessonId: string,
  //   @Body() data: Partial<LessonUpdateDto>,
  // ): Promise<void> {
  //   await this.service.updateLesson(lessonId, data);
  // }
}
