import { Controller, Get } from "@nestjs/common";
import { TagDto } from "./dto/tag.dto";
import { TagsService } from "./tags.service";

@Controller("tags")
export class TagsController {
  constructor(private readonly service: TagsService) {}

  @Get()
  findAll(): Promise<TagDto[]> {
    return this.service.findAll();
  }
}
