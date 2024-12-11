import { ApiProperty } from "@nestjs/swagger";
import { SessionUser } from "src/auth/auth.service";

export class User implements SessionUser {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  image: string;
}
