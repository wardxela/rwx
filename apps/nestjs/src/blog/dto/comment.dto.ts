import { UserDto } from "src/users/dto/get-user.dto";

export class CommentDto {
  id: string;
  postId: string;
  content: string;
  author: CommentAuthor;
  createdAt: Date;
  updatedAt: Date;
}

export class CommentAuthor
  implements Pick<UserDto, "id" | "firstName" | "lastName" | "image" | "bio">
{
  id: string;
  firstName: string;
  lastName: string;
  image: string | null;
  bio: string | null;
}
