import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class SendMessageDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(25)
  @MaxLength(500)
  message: string;
}
