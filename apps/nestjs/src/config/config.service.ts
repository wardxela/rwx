import { Injectable } from "@nestjs/common";
import type { ConfigService as NestConfigService } from "@nestjs/config";

import type { Env } from "./env.validation";

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get<K extends keyof Env>(key: K): Env[K] {
    return this.configService.get(key)!;
  }
}
