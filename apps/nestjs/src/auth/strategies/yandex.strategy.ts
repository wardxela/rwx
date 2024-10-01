import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, StrategyOptions } from "passport-oauth2";
import { ConfigService } from "src/config/config.service";

import { AuthService } from "../auth.service";

interface YandexUser {
  id: string;
  first_name: string;
  last_name: string;
  default_email: string;
  default_avatar_id: string;
}

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, "yandex") {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      authorizationURL: "https://oauth.yandex.ru/authorize",
      tokenURL: "https://oauth.yandex.ru/token",
      clientID: configService.get("YANDEX_CLIENT_ID"),
      clientSecret: configService.get("YANDEX_CLIENT_SECRET"),
      // TODO: move host to .env. Path should be the same i guess.
      callbackURL: "http://localhost:3001/auth/yandex/callback",
    } satisfies StrategyOptions);
  }

  async validate(accessToken: string) {
    const user = await fetch("https://login.yandex.ru/info?", {
      headers: {
        Authorization: `OAuth ${accessToken}`,
      },
    }).then((res) => res.json() as Promise<YandexUser>);
    return this.authService.oauth2Login({
      provider: "yandex",
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.default_email,
        // TODO: Consider to download avatar and serve it yourself instead
        avatar: `https://avatars.yandex.net/get-yapic/${user.default_avatar_id}/islands-middle`,
      },
    });
  }
}
