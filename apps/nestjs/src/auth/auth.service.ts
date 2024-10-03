import { Injectable } from "@nestjs/common";
import { Selectable } from "kysely";
import { ProviderUserInfo, UsersService } from "src/users/users.service";

import { User } from "@rwx/db";

// TODO: augment with Express.User
export type SessionUser = Selectable<User>;

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Inspired by Auth.js.
   * @link https://authjs.dev/
   *
   * Auth flow:
   * ```
   * Yandex ->
   * Google -> Provider name & Provider ID -> Our User
   * VK     ->
   * ```
   *
   * Explanation:
   * 1. User authenticates via one of the supported providers.
   * 2. Passport strategy provides provider's name and user id
   * 3. We make sure this Account exists and it's connected to the specific User.
   * 4. We return our user.
   *
   * The most notable feature:
   * If existing user logs in via another provider with the same email,
   * we return existing user instead of creating a new one.
   */
  async oauth2Login(providerUser: ProviderUserInfo): Promise<SessionUser> {
    const user = await this.usersService.findByProviderId(
      providerUser.provider,
      providerUser.user.id,
    );
    if (user) {
      return user;
    }
    if (providerUser.user.email) {
      const user = await this.usersService.findByEmail(providerUser.user.email);
      if (user) {
        await this.usersService.connectAccount({
          userId: user.id,
          provider: providerUser.provider,
          providerId: providerUser.user.id,
        });
        return user;
      }
    }
    return this.usersService.createByProvider(providerUser);
  }
}
