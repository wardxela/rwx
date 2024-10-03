import type { Account, DB, User } from "@rwx/db";
import { Injectable } from "@nestjs/common";
import { Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";

export interface ProviderUserInfo {
  provider: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    email?: string;
  };
}

export interface ConnectAccountParams {
  userId: string;
  provider: string;
  providerId: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}
  async findById(id: string): Promise<Selectable<User>> {
    return this.db
      .selectFrom("User")
      .where("User.id", "=", id)
      .selectAll("User")
      .executeTakeFirstOrThrow();
  }

  async findByEmail(email: string): Promise<Selectable<User> | undefined> {
    return this.db
      .selectFrom("User")
      .where("User.email", "=", email)
      .selectAll("User")
      .executeTakeFirst();
  }

  async findByProviderId(
    provider: string,
    id: string,
  ): Promise<Selectable<User> | undefined> {
    return this.db
      .selectFrom("User")
      .innerJoin("Account", "Account.userId", "User.id")
      .where("Account.providerId", "=", id)
      .where("Account.providerName", "=", provider)
      .selectAll("User")
      .executeTakeFirst();
  }

  async createByProvider(data: ProviderUserInfo): Promise<Selectable<User>> {
    return this.db.transaction().execute(async (trx) => {
      const user = await trx
        .insertInto("User")
        .values({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
          image: data.user.avatar,
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      await trx
        .insertInto("Account")
        .values({
          providerName: data.provider,
          providerId: data.user.id,
          userId: user.id,
        })
        .execute();

      return user;
    });
  }

  async connectAccount(
    params: ConnectAccountParams,
  ): Promise<Selectable<Account> | undefined> {
    return this.db
      .insertInto("Account")
      .values({
        userId: params.userId,
        providerId: params.providerId,
        providerName: params.provider,
      })
      .returningAll()
      .executeTakeFirst();
  }
}
