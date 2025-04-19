import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { Response as ExpressResponse } from "express";
import { ConfigService } from "src/config/config.service";

import { GithubGuard } from "./guards/github.guard";
import { YandexGuard } from "./guards/yandex.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get("yandex")
  @UseGuards(YandexGuard)
  loginYandex() {
    // Redirect to Yandex
  }

  @Get("github")
  @UseGuards(GithubGuard)
  loginGithub() {
    // Redirect to GitHub
  }

  @Get("yandex/callback")
  @UseGuards(YandexGuard)
  callbackYandex(@Res() res: ExpressResponse) {
    res.redirect(this.configService.get("NESTJS_CLIENT_AUTH_CALLBACK_URL"));
  }

  @Get("github/callback")
  @UseGuards(GithubGuard)
  callbackGithub(@Res() res: ExpressResponse) {
    res.redirect(this.configService.get("NESTJS_CLIENT_AUTH_CALLBACK_URL"));
  }
}
