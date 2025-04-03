import { Reflector } from "@nestjs/core";
import { UserRole } from "@rwx/db";

export const Roles = Reflector.createDecorator<UserRole[]>();
