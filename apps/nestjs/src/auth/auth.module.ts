import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { SessionGuard } from "./guards/session.guard";
import { PassportSerializer } from "./providers/passport.serializer";
import { GithubStrategy } from "./strategies/github.strategy";
import { YandexStrategy } from "./strategies/yandex.strategy";

@Module({
  imports: [PassportModule, UsersModule],
  providers: [
    AuthService,
    YandexStrategy,
    GithubStrategy,
    SessionGuard,
    PassportSerializer,
  ],
  controllers: [AuthController],
  exports: [SessionGuard],
})
export class AuthModule {}
