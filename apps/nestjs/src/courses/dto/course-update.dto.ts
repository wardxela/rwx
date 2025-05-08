import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CourseUpdateDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  title?: string;

  @IsString()
  @MaxLength(5000)
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  oldPrice?: number;

  @IsString()
  @IsUrl({ require_host: false })
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsObject()
  @IsOptional()
  faq?: unknown;

  @IsNumber()
  @IsOptional()
  categoryId?: number;
}
