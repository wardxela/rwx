import { CategoryDto } from "src/categories/dto/category.dto";

export class CoursesDto {
  page: CourseDto[];
  total: number;
}

export class CourseDto {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  faq?: unknown;
  category?: CategoryDto;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    image: string | null;
    bio: string | null;
  };
  duration: number;
  studentsCount: number;
  lessonsCount: number;
  averageRating: number;
}
