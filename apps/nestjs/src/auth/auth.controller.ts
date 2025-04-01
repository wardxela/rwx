import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { Response as ExpressResponse } from "express";
import { ConfigService } from "src/config/config.service";

import { YandexAuthGuard } from "./guards/yandex-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get("yandex")
  @UseGuards(YandexAuthGuard)
  loginYandex() {
    // Redirect to Yandex
  }

  @Get("yandex/callback")
  @UseGuards(YandexAuthGuard)
  callbackYandex(@Res() res: ExpressResponse) {
    res.redirect(this.configService.get("NESTJS_CLIENT_AUTH_CALLBACK_URL"));
  }
}
