import { User, UserRole } from "@rwx/db";
import { Selectable } from "kysely";

export class GetProfileDto implements Selectable<User> {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string | null;
  bio: string | null;
  roles: UserRole[];
  createdAt: Date;
  updatedAt: Date;
}
