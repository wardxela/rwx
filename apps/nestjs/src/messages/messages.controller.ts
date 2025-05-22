import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MessageDto } from "./dto/message.dto";
import { SendMessageDto } from "./dto/send-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(private readonly service: MessagesService) {}

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
