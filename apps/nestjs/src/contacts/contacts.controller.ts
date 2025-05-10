import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { MessageDto } from "./dto/message.dto";
import { SendMessageDto } from "./dto/send-message.dto";

@Controller("contacts")
export class ContactsController {
  constructor(private readonly service: ContactsService) {}

  @Get()
  async getAll(): Promise<MessageDto[]> {
    return this.service.getAll();
  }

  @Post()
  async sendMessage(@Body() dto: SendMessageDto): Promise<boolean> {
    await this.service.saveMessage(dto);
    return true;
  }

  @Delete(":id")
  async deleteMessage(@Param("id") id: number): Promise<boolean> {
    await this.service.deleteMessageById(id);
    return true;
  }
}
