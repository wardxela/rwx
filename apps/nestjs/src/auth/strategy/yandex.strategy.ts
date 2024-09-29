import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, StrategyOptions } from "passport-oauth2";

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, "yandex") {
  constructor(private configService: ConfigService) {
    const clientID = configService.get<string>("YANDEX_CLIENT_ID");
    const clientSecret = configService.get<string>("YANDEX_CLIENT_SECRET");
    // TODO: create general-purpose validation to avoid such checks in the future
    if (!clientID || !clientSecret) {
      throw new Error("YANDEX_CLIENT_ID and YANDEX_CLIENT_SECRET must be set");
    }
    super({
      authorizationURL: "https://oauth.yandex.ru/authorize",
      tokenURL: "https://oauth.yandex.ru/token",
      clientID,
      clientSecret,
      // TODO: move to .env
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
