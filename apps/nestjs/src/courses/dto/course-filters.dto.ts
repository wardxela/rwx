import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CourseFiltersDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsString({ each: true })
  @IsOptional()
  authors?: string[];

  @Type(() => Number)
  @IsNumber({}, { each: true })
  @IsOptional()
  categories?: number[];

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  minPrice?: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  maxPrice?: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(5)
  @IsOptional()
  rating?: number;

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

export interface CourseHiddenFilters {
  published?: boolean;
}
