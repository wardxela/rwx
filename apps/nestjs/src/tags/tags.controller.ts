import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  UseGuards,
} from "@nestjs/common";
import { Roles } from "src/auth/guards/roles.decorator";
import { SessionGuard } from "src/auth/guards/session.guard";
import { TagCreateDto } from "./dto/tag-create.dto";
import { TagDto } from "./dto/tag.dto";
import { TagsService } from "./tags.service";

@Controller("tags")
export class TagsController {
  constructor(private readonly service: TagsService) {}

  @Get()
  findAll(): Promise<TagDto[]> {
    return this.service.findAll();
  }

  @Post()
  @Roles(["ADMIN"])
  @UseGuards(SessionGuard)
  async create(@Body() createTagDto: TagCreateDto): Promise<number> {
    const newTagId = await this.service.create(createTagDto);
    if (newTagId === null) {
      throw new ConflictException(
        `Item with name "${createTagDto.name}" already exists.`,
      );
    }
    return newTagId;
  }
}
