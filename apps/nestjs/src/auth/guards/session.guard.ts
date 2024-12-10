import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from "@nestjs/common";
import type { Request } from "express";

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    return req.isAuthenticated();
  }
}
