import type { DB } from "@rwx/db";
import { Injectable } from "@nestjs/common";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";

@Injectable()
export class UsersService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}
}
