import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, StrategyOptions } from "passport-oauth2";
import { ConfigService } from "src/config/config.service";

import { AuthService } from "../auth.service";

interface GithubUser {
  id: string;
  name: string;
  email?: string | null;
  avatar_url: string;
}

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      authorizationURL: "https://github.com/login/oauth/authorize",
      tokenURL: "https://github.com/login/oauth/access_token",
      clientID: configService.get("GITHUB_CLIENT_ID"),
      clientSecret: configService.get("GITHUB_CLIENT_SECRET"),
      callbackURL: `${configService.get("NESTJS_URL")}/auth/github/callback`,
    } satisfies StrategyOptions);
  }

  async validate(accessToken: string): Promise<Express.User> {
    const user = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json() as Promise<GithubUser>);
    return this.authService.oauth2Login({
      provider: "github",
      user: {
        id: user.id,
        firstName: user.name,
        lastName: "",
        email: user.email,
        avatar: user.avatar_url,
      },
    });
  }
}
