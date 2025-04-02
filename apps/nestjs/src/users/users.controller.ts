import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { SessionUser } from "src/auth/auth.service";
import { SessionGuard } from "src/auth/guards/session.guard";
import { GetProfileDto } from "./dto/get-profile.dto";

@Controller("users")
export class UsersController {
  @UseGuards(SessionGuard)
  @Get("me")
  findMe(@Req() req: Request): GetProfileDto {
    return req.user as SessionUser;
  }
}
