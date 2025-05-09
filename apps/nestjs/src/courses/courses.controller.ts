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
import { UserCountedDto } from "src/users/dto/get-user.dto";
import { UsersService } from "src/users/users.service";
import { CoursesService } from "./courses.service";
import { CourseCreateDto } from "./dto/course-create.dto";
import { CourseFiltersDto } from "./dto/course-filters.dto";
import { CourseUpdateDto } from "./dto/course-update.dto";
import { CourseDto, CoursesDto } from "./dto/course.dto";
import { LessonDto, ModuleDto } from "./dto/module.dto";

@Controller("courses")
export class CoursesController {
  constructor(
    private readonly service: CoursesService,
    private readonly categoriesService: CategoriesService,
    private readonly usersService: UsersService,
  ) {}

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

  @Put(":id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async updateCourse(
    @Param("id") id: string,
    @Body() data: Partial<CourseUpdateDto>,
  ): Promise<void> {
    await this.service.updateCourse(id, data);
  }

  @Delete(":id")
  @Roles(["INSTRUCTOR"])
  @UseGuards(SessionGuard)
  async deleteCourse(@Param("id") id: string): Promise<boolean> {
    return this.service.deleteCourse(id);
  }

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

  @Get("categories")
  getCategories() {
    return this.categoriesService.findAllWithPublishedCoursesCount();
  }

  @Get("authors")
  getAuthors(): Promise<UserCountedDto[]> {
    return this.usersService.getAllCourseAuthors();
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
}
