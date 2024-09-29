import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { YandexStrategy } from "./strategy/yandex.strategy";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "../../.env",
    }),
    PassportModule,
  ],
  providers: [AuthService, YandexStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
