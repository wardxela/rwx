import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";

import { Env } from "./env.validation";

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get<K extends keyof Env>(key: K): Env[K] {
     
    return this.configService.get(key)!;
  }
}
