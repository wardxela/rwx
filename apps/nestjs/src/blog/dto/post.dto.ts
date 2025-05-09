import { CategoryDto } from "src/categories/dto/category.dto";
import { PaginatedDtoI } from "src/common/dto/paginated.dto";
import { TagDto } from "src/tags/dto/tag.dto";
import { UserDto } from "src/users/dto/get-user.dto";

export class PostsDto implements PaginatedDtoI<PostDto> {
  page: PostDto[];
  total: number;
}

export class PostDto {
  id: string;
  title: string;
  content: unknown;
  excerpt: string | null;
  image: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  commentsCount?: string | number | bigint;
  author: PostAuthorDto;
  category?: CategoryDto;
  tags: TagDto[];
}

export class PostAuthorDto
  implements Pick<UserDto, "id" | "firstName" | "lastName" | "image" | "bio">
{
  id: string;
  firstName: string;
  lastName: string;
  image: string | null;
  bio: string | null;
}
