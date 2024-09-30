import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, StrategyOptions } from "passport-oauth2";
import { ConfigService } from "src/config/config.service";

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, "yandex") {
  constructor(configService: ConfigService) {
    super({
      authorizationURL: "https://oauth.yandex.ru/authorize",
      tokenURL: "https://oauth.yandex.ru/token",
      clientID: configService.get("YANDEX_CLIENT_ID"),
      clientSecret: configService.get("YANDEX_CLIENT_SECRET"),
      // TODO: move host to .env. Path should be the same i guess.
      callbackURL: "http://localhost:3001/auth/yandex/callback",
    } satisfies StrategyOptions);
  }

  validate(accessToken: string, refreshToken: string) {
    return {
      name: "test",
      accessToken,
      refreshToken,
    };
    // const user = await this.authService.validateUser(username, password);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user;
  }
}
