import { Injectable } from "@nestjs/common";
import { PassportSerializer as NestPassportSerializer } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";

@Injectable()
export class PassportSerializer extends NestPassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  serializeUser(
    user: Express.User,
    done: (err: Error | null, user: { id: string }) => void,
  ) {
    done(null, { id: user.id });
  }

  async deserializeUser(
    payload: { id: string },
    done: (err: Error | null, user: Express.User) => void,
  ) {
    const user = await this.userService.findById(payload.id);
    done(null, user);
  }
}
