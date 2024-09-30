import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { YandexStrategy } from "./strategies/yandex.strategy";

@Module({
  imports: [PassportModule],
  providers: [AuthService, YandexStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
