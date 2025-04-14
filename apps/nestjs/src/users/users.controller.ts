import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { SessionGuard } from "src/auth/guards/session.guard";
import { UserDto } from "./dto/get-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(SessionGuard)
  @Get("me")
  findMe(@Req() req: Request): UserDto {
    return req.user!;
  }

  @UseGuards(SessionGuard)
  @Post("me")
  async updateMe(
    @Req() req: Request,
    @Body() body: UpdateUserDto,
  ): Promise<UserDto> {
    return this.userService.updateById(req.user!.id, body);
  }
}
