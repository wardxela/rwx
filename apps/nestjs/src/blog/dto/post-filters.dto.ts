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
  tags?: number | number[];

  @Type(() => Number)
  @IsNumber({}, { each: true })
  @IsOptional()
  categories?: number | number[];

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(20)
  @IsOptional()
  limit?: number = 20;
}
