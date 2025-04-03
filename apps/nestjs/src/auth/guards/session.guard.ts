import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "@rwx/db";
import { Request } from "express";
import { Roles } from "./roles.decorator";

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler()) as
      | UserRole[]
      | undefined;
    const req = context.switchToHttp().getRequest<Request>();
    if (!req.isAuthenticated()) {
      return false;
    }
    if (!roles) {
      return true;
    }
    return roles.every((role) => req.user.roles.includes(role));
  }
}
