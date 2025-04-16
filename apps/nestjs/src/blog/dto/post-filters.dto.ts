import { Type } from "class-transformer";
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";

export class PostFiltersDto {
  @IsString()
  @IsOptional()
  search?: string;

  @Type(() => Number)
  @IsNumber({}, { each: true })
  @IsOptional()
  tags?: number[];

  @Type(() => Number)
  @IsNumber({}, { each: true })
  @IsOptional()
  categories?: number[];

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(20)
  @IsOptional()
  limit?: number = 20;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  offset?: number = 0;
}

export interface PostHiddenFilters {
  authorId?: string;
  published?: boolean;
}
