import { IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateBlogPostDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @IsUUID()
  category: string;
}
