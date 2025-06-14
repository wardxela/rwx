import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { FilesService } from "src/files/files.service";
import { CourseCreateDto } from "./dto/course-create.dto";
import {
  CourseFiltersDto,
  CourseHiddenFilters,
} from "./dto/course-filters.dto";
import { CourseUpdateDto } from "./dto/course-update.dto";
import { CourseDto, CoursesDto } from "./dto/course.dto";
import { LessonUpdateDto } from "./dto/lesson-update.dto";
import { ModuleCreateDto } from "./dto/module-create.dto";
import { LessonDto, ModuleDto } from "./dto/module.dto";
import { ReviewCreateDto, ReviewDto } from "./dto/review.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private filesService: FilesService,
  ) {}

  async createCourse(authorId: string, data: CourseCreateDto): Promise<string> {
    const { id } = await this.db
      .insertInto("Course")
      .values({
        authorId,
        title: data.title,
        description: "",
        price: 0,
        updatedAt: new Date(),
      })
      .returning(["Course.id"])
      .executeTakeFirstOrThrow();
    return id;
  }

  async updateCourse(
    id: string,
    data: Partial<CourseUpdateDto>,
  ): Promise<void> {
    await this.db
      .updateTable("Course")
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where("Course.id", "=", id)
      .execute();
  }

  async deleteCourse(id: string): Promise<boolean> {
    const result = await this.db
      .deleteFrom("Course")
      .where("id", "=", id)
      .executeTakeFirst();
    return result.numDeletedRows > 0;
  }

  async addModule(courseId: string, data: ModuleCreateDto): Promise<string> {
    const { id } = await this.db
      .insertInto("Module")
      .values({
        courseId,
        title: data.title,
        position: await this.getNextModulePosition(courseId),
        updatedAt: new Date(),
      })
      .returning(["Module.id"])
      .executeTakeFirstOrThrow();
    return id;
  }

  async updateLesson(
    lessonId: string,
    data: Partial<LessonUpdateDto>,
  ): Promise<void> {
    await this.db
      .updateTable("Lesson")
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where("Lesson.id", "=", lessonId)
      .execute();
  }

  async leaveReview(
    userId: string,
    courseId: string,
    data: ReviewCreateDto,
  ): Promise<string> {
    const { id } = await this.db
      .insertInto("CourseReview")
      .values({
        userId,
        courseId,
        comment: data.comment,
        rating: data.rating,
        updatedAt: new Date(),
      })
      .returning(["CourseReview.id"])
      .executeTakeFirstOrThrow();
    return id;
  }

  private async getNextModulePosition(courseId: string): Promise<number> {
    const result = await this.db
      .selectFrom("Module")
      .where("Module.courseId", "=", courseId)
      .select(({ fn }) => [fn.max("Module.position").as("maxPosition")])
      .executeTakeFirst();
    return (result?.maxPosition ?? 0) + 1;
  }

  async getCourse(id: string): Promise<CourseDto | null> {
    const course = await this.db
      .selectFrom("Course")
      .innerJoin("User", "User.id", "Course.authorId")
      .leftJoin("Category", "Category.id", "Course.categoryId")
      .leftJoin("Module", "Module.courseId", "Course.id")
      .leftJoin("Lesson", "Lesson.moduleId", "Module.id")
      .leftJoin("CourseEnrollment", "CourseEnrollment.courseId", "Course.id")
      .leftJoin("CourseReview", (join) =>
        join
          .onRef("CourseReview.courseId", "=", "Course.id")
          .on("CourseReview.approved", "=", true),
      )
      .select(({ fn }) => [
        "Course.id",
        "Course.title",
        "Course.description",
        "Course.price",
        "Course.oldPrice",
        "Course.image",
        "Course.faq",
        "Course.published",
        "Course.createdAt",
        "Course.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
        "Category.id as categoryId",
        "Category.name as categoryName",
        fn.count("CourseEnrollment.id").as("studentsCount"),
        fn.sum("Lesson.duration").as("duration"),
        fn.count("Lesson.id").as("lessonsCount"),
        fn.avg("CourseReview.rating").as("averageRating"),
      ])
      .where("Course.id", "=", id)
      .groupBy(["Course.id", "User.id", "Category.id"])
      .executeTakeFirst();

    if (!course) {
      return null;
    }

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      price: Number(course.price),
      oldPrice: course.oldPrice ? Number(course.oldPrice) : undefined,
      image: course.image ? this.filesService.resolve(course.image) : null,
      faq: course.faq,
      published: course.published,
      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
      author: {
        id: course.authorId,
        firstName: course.authorFirstName,
        lastName: course.authorLastName,
        bio: course.authorBio,
        image: course.authorImage
          ? this.filesService.resolve(course.authorImage)
          : null,
      },
      category: course.categoryId
        ? {
            id: course.categoryId!,
            name: course.categoryName!,
          }
        : undefined,
      duration: Number(course.duration),
      studentsCount: Number(course.studentsCount),
      lessonsCount: Number(course.lessonsCount),
      averageRating: Number(course.averageRating),
    };
  }

  async getCourses(
    filters: CourseFiltersDto & CourseHiddenFilters,
  ): Promise<CoursesDto> {
    let query = this.db.selectFrom("Course");

    if (filters.published !== undefined) {
      query = query.where("Course.published", "=", filters.published);
    }

    if (filters.minPrice !== undefined) {
      query = query.where("Course.price", ">=", filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      query = query.where("Course.price", "<=", filters.maxPrice);
    }

    if (filters.search) {
      query = query.where((eb) =>
        eb.or([
          eb(
            "Course.title",
            "ilike",
            `%${filters.search?.split("").join("%")}%`,
          ),
          eb(
            "Course.description",
            "ilike",
            `%${filters.search?.split("").join("%")}%`,
          ),
        ]),
      );
    }

    const authors = filters.authors
      ? Array.isArray(filters.authors)
        ? filters.authors
        : [filters.authors]
      : [];

    if (authors.length > 0) {
      query = query.where("Course.authorId", "in", authors);
    }

    const categories = filters.categories
      ? Array.isArray(filters.categories)
        ? filters.categories
        : [filters.categories]
      : [];

    if (categories.length > 0) {
      query = query.where("Course.categoryId", "in", categories);
    }

    if (filters.rating !== undefined) {
      query.where((eb) =>
        eb(
          "Course.id",
          "in",
          eb
            .selectFrom("CourseReview")
            .select("CourseReview.courseId")
            .groupBy("CourseReview.courseId")
            .having(
              ({ fn }) => fn.avg("CourseReview.rating"),
              ">=",
              filters.rating,
            ),
        ),
      );
    }

    const total = await query
      .select(({ fn }) => [fn.count("Course.id").as("count")])
      .executeTakeFirstOrThrow();

    const pageSize = filters.limit ?? 20;
    const offset = filters.offset ?? 0;

    const courseIds = await query
      .select("Course.id")
      .orderBy("Course.updatedAt", "desc")
      .limit(pageSize)
      .offset(offset)
      .execute();

    if (courseIds.length === 0) {
      return {
        page: [],
        total: Number(total.count),
      };
    }

    const courses = await query
      .leftJoin("User", "User.id", "Course.authorId")
      .leftJoin("Category", "Category.id", "Course.categoryId")
      .leftJoin("Module", "Module.courseId", "Course.id")
      .leftJoin("Lesson", "Lesson.moduleId", "Module.id")
      .leftJoin("CourseEnrollment", "CourseEnrollment.courseId", "Course.id")
      .leftJoin("CourseReview", (join) =>
        join
          .onRef("CourseReview.courseId", "=", "Course.id")
          .on("CourseReview.approved", "=", true),
      )
      .select(({ fn }) => [
        "Course.id",
        "Course.title",
        "Course.description",
        "Course.price",
        "Course.oldPrice",
        "Course.image",
        "Course.faq",
        "Course.published",
        "Course.createdAt",
        "Course.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
        "Category.id as categoryId",
        "Category.name as categoryName",
        fn.count("CourseEnrollment.id").as("studentsCount"),
        fn.sum("Lesson.duration").as("duration"),
        fn.count("Lesson.id").as("lessonsCount"),
        fn.avg("CourseReview.rating").as("averageRating"),
      ])
      .where(
        "Course.id",
        "in",
        courseIds.map((course) => course.id),
      )
      .groupBy(["Course.id", "User.id", "Category.id"])
      .orderBy("Course.updatedAt", "desc")
      .execute();

    return {
      page: courses.map((course) => ({
        id: course.id,
        title: course.title,
        description: course.description,
        price: Number(course.price),
        oldPrice: course.oldPrice ? Number(course.oldPrice) : undefined,
        image: course.image ? this.filesService.resolve(course.image) : null,
        faq: course.faq,
        published: course.published,
        createdAt: course.createdAt,
        updatedAt: course.updatedAt,
        author: {
          id: course.authorId!,
          firstName: course.authorFirstName!,
          lastName: course.authorLastName!,
          bio: course.authorBio,
          image: course.authorImage
            ? this.filesService.resolve(course.authorImage)
            : null,
        },
        category: course.categoryId
          ? {
              id: course.categoryId!,
              name: course.categoryName!,
            }
          : undefined,
        duration: Number(course.duration),
        studentsCount: Number(course.studentsCount),
        lessonsCount: Number(course.lessonsCount),
        averageRating: Number(course.averageRating),
      })),
      total: Number(total.count),
    };
  }

  async getCourseStructure(id: string): Promise<ModuleDto[]> {
    const modules = await this.db
      .selectFrom("Module")
      .where("Module.courseId", "=", id)
      .selectAll("Module")
      .orderBy("Module.position")
      .execute();
    const lessons = await this.db
      .selectFrom("Lesson")
      .where(
        "Lesson.moduleId",
        "in",
        modules.map((m) => m.id),
      )
      .select([
        "Lesson.id",
        "Lesson.title",
        "Lesson.position",
        "Lesson.duration",
        "Lesson.createdAt",
        "Lesson.updatedAt",
        "Lesson.moduleId",
      ])
      .orderBy("Lesson.moduleId")
      .orderBy("Lesson.position")
      .execute();
    const lessonsByModule = lessons.reduce(
      (acc, lesson) => {
        if (!acc[lesson.moduleId]) {
          acc[lesson.moduleId] = [];
        }
        acc[lesson.moduleId].push(lesson);
        return acc;
      },
      {} as Record<string, typeof lessons>,
    );
    return modules.map((module) => ({
      id: module.id,
      title: module.title,
      position: module.position,
      lessons: lessonsByModule[module.id] || [],
      createdAt: module.createdAt,
      updatedAt: module.updatedAt,
    }));
  }

  async getCourseReviews(id: string): Promise<ReviewDto[]> {
    const reviews = await this.db
      .selectFrom("CourseReview")
      .innerJoin("User", "User.id", "CourseReview.userId")
      .select([
        "CourseReview.id",
        "CourseReview.rating",
        "CourseReview.comment",
        "CourseReview.courseId",
        "CourseReview.approved",
        "CourseReview.createdAt",
        "CourseReview.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
      ])
      .where("CourseReview.courseId", "=", id)
      .where("CourseReview.approved", "=", true)
      .orderBy("CourseReview.createdAt", "desc")
      .execute();

    return reviews.map((review) => ({
      id: review.id,
      rating: review.rating,
      comment: review.comment,
      courseId: review.courseId,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      approved: review.approved,
      author: {
        id: review.authorId,
        firstName: review.authorFirstName,
        lastName: review.authorLastName,
        image: review.authorImage
          ? this.filesService.resolve(review.authorImage)
          : null,
        bio: review.authorBio,
      },
    }));
  }

  async getCourseReviewByUserId(
    userId: string,
    courseId: string,
  ): Promise<ReviewDto | null> {
    const review = await this.db
      .selectFrom("CourseReview")
      .innerJoin("User", "User.id", "CourseReview.userId")
      .where("CourseReview.userId", "=", userId)
      .where("CourseReview.courseId", "=", courseId)
      .select([
        "CourseReview.id",
        "CourseReview.rating",
        "CourseReview.comment",
        "CourseReview.courseId",
        "CourseReview.approved",
        "CourseReview.createdAt",
        "CourseReview.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
      ])
      .orderBy("CourseReview.createdAt", "desc")
      .executeTakeFirst();

    if (!review) {
      return null;
    }
    return {
      id: review.id,
      rating: review.rating,
      comment: review.comment,
      courseId: review.courseId,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      approved: review.approved,
      author: {
        id: review.authorId,
        firstName: review.authorFirstName,
        lastName: review.authorLastName,
        image: review.authorImage
          ? this.filesService.resolve(review.authorImage)
          : null,
        bio: review.authorBio,
      },
    };
  }

  async getReviews(): Promise<ReviewDto[]> {
    const reviews = await this.db
      .selectFrom("CourseReview")
      .innerJoin("User", "User.id", "CourseReview.userId")
      .select([
        "CourseReview.id",
        "CourseReview.rating",
        "CourseReview.comment",
        "CourseReview.courseId",
        "CourseReview.approved",
        "CourseReview.createdAt",
        "CourseReview.updatedAt",
        "User.id as authorId",
        "User.firstName as authorFirstName",
        "User.lastName as authorLastName",
        "User.image as authorImage",
        "User.bio as authorBio",
      ])
      .where("CourseReview.approved", "=", false)
      .orderBy("CourseReview.createdAt", "desc")
      .execute();

    return reviews.map((review) => ({
      id: review.id,
      rating: review.rating,
      comment: review.comment,
      courseId: review.courseId,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      approved: review.approved,
      author: {
        id: review.authorId,
        firstName: review.authorFirstName,
        lastName: review.authorLastName,
        image: review.authorImage
          ? this.filesService.resolve(review.authorImage)
          : null,
        bio: review.authorBio,
      },
    }));
  }

  async approveReview(id: string): Promise<void> {
    await this.db
      .updateTable("CourseReview")
      .set({
        approved: true,
      })
      .where("CourseReview.id", "=", id)
      .execute();
  }

  async getCourseLesson(lessonId: string): Promise<LessonDto> {
    return this.db
      .selectFrom("Lesson")
      .where("Lesson.id", "=", lessonId)
      .selectAll("Lesson")
      .executeTakeFirstOrThrow();
  }
}
