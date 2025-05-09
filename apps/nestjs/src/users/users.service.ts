import { Injectable } from "@nestjs/common";
import { Account, DB, User, UserRole } from "@rwx/db";
import { Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { FilesService } from "src/files/files.service";
import { UserCountedDto, UserDto } from "./dto/get-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

export interface ProviderUserInfo {
  provider: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email?: string | null;
    avatar?: string;
  };
}

export interface ConnectAccountParams {
  userId: string;
  provider: string;
  providerId: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private filesService: FilesService,
  ) {}

  private transformUser<T extends Selectable<User> | undefined>(user: T): T {
    if (!user) {
      return user;
    }
    return {
      ...user,
      image: user.image ? this.filesService.resolve(user.image) : null,
      // @ts-expect-error It's actually a string
      roles: parseRoles(user.roles),
    };
  }

  async findById(id: string): Promise<Selectable<User>> {
    const user = await this.db
      .selectFrom("User")
      .where("User.id", "=", id)
      .selectAll("User")
      .executeTakeFirstOrThrow();
    return this.transformUser(user);
  }

  async findByEmail(email: string): Promise<Selectable<User> | undefined> {
    const user = await this.db
      .selectFrom("User")
      .where("User.email", "=", email)
      .selectAll("User")
      .executeTakeFirst();
    return this.transformUser(user);
  }

  async findByProviderId(
    provider: string,
    id: string,
  ): Promise<Selectable<User> | undefined> {
    const user = await this.db
      .selectFrom("User")
      .innerJoin("Account", "Account.userId", "User.id")
      .where("Account.providerId", "=", id)
      .where("Account.providerName", "=", provider)
      .selectAll("User")
      .executeTakeFirst();
    return this.transformUser(user);
  }

  async createByProvider(data: ProviderUserInfo): Promise<Selectable<User>> {
    return this.db.transaction().execute(async (trx) => {
      const user = this.transformUser(
        await trx
          .insertInto("User")
          .values({
            roles: ["STUDENT"],
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            email: data.user.email,
            image: data.user.avatar,
            updatedAt: new Date(),
          })
          .returningAll()
          .executeTakeFirstOrThrow(),
      );

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

  async updateById(id: string, data: UpdateUserDto): Promise<Selectable<User>> {
    const user = await this.db
      .updateTable("User")
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirstOrThrow();
    return this.transformUser(user);
  }

  async getAllCourseAuthors(): Promise<UserCountedDto[]> {
    return (
      this.db
        .selectFrom("User")
        .leftJoin("Course", "Course.authorId", "User.id")
        // @ts-expect-error
        .where("roles", "@>", "{INSTRUCTOR}")
        .select(({ fn }) => [
          "User.id",
          "User.bio",
          "User.email",
          "User.image",
          "User.roles",
          "User.firstName",
          "User.lastName",
          "User.createdAt",
          "User.updatedAt",
          fn.count("Course.id").as("count"),
        ])
        .groupBy("User.id")
        .orderBy("count", "desc")
        .execute()
    );
  }
}

function parseRoles(roles: string): UserRole[] {
  return roles.slice(1, -1).split(",") as UserRole[];
}
