import type { SessionUser } from "src/auth/auth.service";
import { ApiProperty } from "@nestjs/swagger";

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
