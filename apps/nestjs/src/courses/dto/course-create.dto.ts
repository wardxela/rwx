import { IsString, MaxLength, MinLength } from "class-validator";

export class CourseCreateDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title: string;
}
