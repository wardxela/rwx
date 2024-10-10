import { NestFactory } from "@nestjs/core";
import * as connectPGSimple from "connect-pg-simple";
import * as session from "express-session";
import * as passport from "passport";

import { AppModule } from "./app.module";
import { ConfigService } from "./config/config.service";
import { UtilsService } from "./utils/utils.service";

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const utilsService = app.get(UtilsService);

  app.use(
    session({
      secret: configService.get("NESTJS_SESSION_SECRET"),
      resave: false,
      saveUninitialized: false,
      store: new (connectPGSimple(session))({
        pool: utilsService.databasePool,
        tableName: "Session",
      }),
      cookie: {
        sameSite: false,
        httpOnly: true,
        maxAge: 600000,
      },
    }),
  );

  app.use(passport.session());

  app.enableCors({
    origin: configService.get("NEXTJS_URL"),
  });

  return app;
}
