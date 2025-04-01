import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { SessionUser } from "src/auth/auth.service";
import { SessionGuard } from "src/auth/guards/session.guard";

@Controller("users")
export class UsersController {
  @UseGuards(SessionGuard)
  @Get("me")
  findMe(@Req() req: Request): SessionUser {
    return req.user as SessionUser;
  }
}
