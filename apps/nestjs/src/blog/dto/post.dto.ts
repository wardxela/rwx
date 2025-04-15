import { CategoryDto } from "src/categories/dto/category.dto";
import { TagDto } from "src/tags/dto/tag.dto";
import { UserDto } from "src/users/dto/get-user.dto";

export class PostDto {
  id: string;
  title: string;
  content: unknown;
  excerpt: string | null;
  image: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
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
