import {
  Body,
  Controller,
  Delete,
  Get,
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
import { CoursesService } from "./courses.service";
import { CourseCreateDto } from "./dto/course-create.dto";
import { CourseFiltersDto } from "./dto/course-filters.dto";
import { CourseUpdateDto } from "./dto/course-update.dto";
import { CoursesDto } from "./dto/course.dto";

@Controller("courses")
export class CoursesController {
  constructor(private readonly service: CoursesService) {}

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
}
