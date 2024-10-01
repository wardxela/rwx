import { Injectable } from "@nestjs/common";

export interface ProviderUserInfo {
  provider: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
    email?: string;
  };
}

@Injectable()
export class AuthService {
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
  oauth2Login(info: ProviderUserInfo) {
    console.log(info);
  }
}
