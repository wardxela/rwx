import { Controller, Get } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoryDto } from "./dto/category.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  findAll(): Promise<CategoryDto[]> {
    return this.service.findAll();
  }
}
