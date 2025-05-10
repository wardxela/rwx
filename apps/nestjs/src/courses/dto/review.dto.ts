import {
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class ReviewDto {
  id: string;
  rating: number;
  comment: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    image: string | null;
    bio: string | null;
  };
  createdAt: Date;
  updatedAt: Date;
}

export class ReviewCreateDto {
  @IsString()
  @MinLength(15)
  @MaxLength(500)
  comment: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
