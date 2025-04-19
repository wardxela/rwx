import { NestFactory } from "@nestjs/core";
import * as connectPGSimple from "connect-pg-simple";
import * as session from "express-session";
import * as passport from "passport";

import { ValidationPipe } from "@nestjs/common";
import { Pool } from "pg";
import { AppModule } from "./app.module";
import { ConfigService } from "./config/config.service";

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.use(
    session({
      secret: configService.get("NESTJS_SESSION_SECRET"),
      resave: false,
      saveUninitialized: false,
      store: new (connectPGSimple(session))({
        pool: new Pool({
          connectionString: configService.get("DATABASE_URL"),
        }),
        tableName: "Session",
      }),
      cookie: {
        sameSite: false,
        httpOnly: true,
        maxAge: 6_000_000,
      },
    }),
  );

  app.use(passport.session());

  app.enableCors({
    // origin: configService.get("NESTJS_CLIENT_URL"),
    // TODO: Implement CORS correctly
    origin: "*",
  });

  return app;
}
