import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from "class-validator";

export class PostUpdateDto {
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
