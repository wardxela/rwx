import { Module } from "@nestjs/common";
import { PostgresDialect } from "kysely";
import { KyselyModule } from "nestjs-kysely";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { BlogModule } from "./blog/blog.module";
import { ConfigModule } from "./config/config.module";
import { UsersModule } from "./users/users.module";
import { UtilsModule } from "./utils/utils.module";
import { UtilsService } from "./utils/utils.service";

@Module({
  imports: [
    ConfigModule,
    KyselyModule.forRootAsync({
      useFactory: (utilsService: UtilsService) => ({
        dialect: new PostgresDialect({
          pool: utilsService.databasePool,
        }),
      }),
      inject: [UtilsService],
      imports: [UtilsModule],
    }),
    AuthModule,
    UsersModule,
    BlogModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
