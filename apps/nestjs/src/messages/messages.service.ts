import { Injectable } from "@nestjs/common";
import { DB } from "@rwx/db";
import { Kysely } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { MessageDto } from "./dto/message.dto";
import { SendMessageDto } from "./dto/send-message.dto";

@Injectable()
export class MessagesService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async saveMessage(dto: SendMessageDto): Promise<void> {
    await this.db
      .insertInto("ContactMessage")
      .values({
        name: dto.name,
        email: dto.email,
        message: dto.message,
      })
      .execute();
  }

  async getAll(): Promise<MessageDto[]> {
    return this.db
      .selectFrom("ContactMessage")
      .select([
        "ContactMessage.id",
        "ContactMessage.name",
        "ContactMessage.email",
        "ContactMessage.message",
        "ContactMessage.createdAt",
      ])
      .orderBy("createdAt", "desc")
      .execute();
  }

  async deleteMessageById(id: number): Promise<void> {
    await this.db.deleteFrom("ContactMessage").where("id", "=", id).execute();
  }
}
