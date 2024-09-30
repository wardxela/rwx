import { Controller, Get, UseGuards } from "@nestjs/common";

import { YandexAuthGuard } from "./strategies/yandex-auth.guard";

@Controller("auth")
export class AuthController {
  @UseGuards(YandexAuthGuard)
  @Get("yandex")
  loginYandex() {
    // Redirect to Yandex
  }

  @UseGuards(YandexAuthGuard)
  @Get("yandex/callback")
  callbackYandex() {
    console.log("here you are");
  }

  // TODO
  // verify() {}
}
