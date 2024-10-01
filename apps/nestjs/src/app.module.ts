import { Module } from "@nestjs/common";
import { PostgresDialect } from "kysely";
import { KyselyModule } from "nestjs-kysely";
import { Pool } from "pg";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "./config/config.module";
import { ConfigService } from "./config/config.service";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule,
    KyselyModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        dialect: new PostgresDialect({
          pool: new Pool({
            connectionString: configService.get("DATABASE_URL"),
          }),
        }),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
