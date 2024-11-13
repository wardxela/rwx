import * as path from "node:path";
import { Global, Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";

import { ConfigService } from "./config.service";
import { validate } from "./env.validation";

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, "../../../../.env"),
      validate,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
