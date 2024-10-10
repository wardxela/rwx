import { Injectable } from "@nestjs/common";
import { Pool } from "pg";
import { ConfigService } from "src/config/config.service";

@Injectable()
export class UtilsService {
  private _databasePool: Pool;

  constructor(private readonly configService: ConfigService) {
    this._databasePool = new Pool({
      connectionString: this.configService.get("DATABASE_URL"),
    });
  }

  public get databasePool(): Pool {
    return this._databasePool;
  }
}
