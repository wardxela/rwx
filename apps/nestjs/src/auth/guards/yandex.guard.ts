import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Injectable()
export class YandexGuard extends AuthGuard("yandex") {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const canActivate = (await super.canActivate(context)) as boolean;
    if (canActivate) {
      const request = context.switchToHttp().getRequest<Request>();
      await super.logIn(request);
    }
    return canActivate;
  }
}
