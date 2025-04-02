import { User as DBUser } from "@rwx/db";
import { Selectable } from "kysely";

declare global {
  namespace Express {
    interface User extends Selectable<DBUser> {}
  }
}
