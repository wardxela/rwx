import {
  IsArray,
  IsBoolean,
  IsJSON,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateBlogPostDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  title?: string;

  @IsObject()
  @IsOptional()
  content?: unknown;

  @IsString()
  @MaxLength(1000)
  @IsOptional()
  excerpt?: string;

  @IsString()
  @IsUrl({ require_host: false })
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsNumber()
  @IsOptional()
  categoryId?: number;

  @IsArray()
  @IsOptional()
  tags?: number[];
}
