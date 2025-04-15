import { Module } from "@nestjs/common";
import { PostgresDialect } from "kysely";
import { KyselyModule } from "nestjs-kysely";

import { Pool } from "pg";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { BlogModule } from "./blog/blog.module";
import { CategoriesModule } from "./categories/categories.module";
import { ConfigModule } from "./config/config.module";
import { ConfigService } from "./config/config.service";
import { FilesModule } from "./files/files.module";
import { TagsModule } from "./tags/tags.module";
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
      imports: [ConfigModule],
    }),
    AuthModule,
    UsersModule,
    BlogModule,
    CategoriesModule,
    TagsModule,
    FilesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
