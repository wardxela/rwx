import { NestFactory } from "@nestjs/core";
import * as session from "express-session";
import * as passport from "passport";

import { AppModule } from "./app.module";
import { ConfigService } from "./config/config.service";

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(
    session({
      secret: configService.get("NESTJS_SESSION_SECRET"),
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: false,
        httpOnly: true,
        maxAge: 600000,
      },
      // store:
    }),
  );

  app.use(passport.session());

  return app;
}
