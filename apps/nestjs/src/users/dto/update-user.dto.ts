import {
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @IsOptional()
  firstName?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsUrl({ require_host: false })
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  bio?: string;
}
