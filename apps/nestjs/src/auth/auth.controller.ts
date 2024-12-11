import { Controller, Get, Res, UseGuards } from "@nestjs/common";
import { Response as ExpressResponse } from "express";
import { ConfigService } from "src/config/config.service";

import { YandexAuthGuard } from "./guards/yandex-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  @UseGuards(YandexAuthGuard)
  @Get("yandex")
  loginYandex() {
    // Redirect to Yandex
  }

  @UseGuards(YandexAuthGuard)
  @Get("yandex/callback")
  callbackYandex(@Res() res: ExpressResponse) {
    const nextUrl = this.configService.get("NEXTJS_URL");
    res.redirect(`${nextUrl}/profile`);
  }

  // TODO
  // verify() {}
}
