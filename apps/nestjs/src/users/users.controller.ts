import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { Request } from "express";
import { SessionUser } from "src/auth/auth.service";
import { SessionGuard } from "src/auth/guards/session.guard";

import { User } from "./entities/user.entity";

@Controller("users")
export class UsersController {
  @UseGuards(SessionGuard)
  @Get("me")
  @ApiResponse({
    status: 200,
    description: "User profile",
    type: User,
  })
  findMe(@Req() req: Request): SessionUser {
    return req.user as SessionUser;
  }
}
