import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { TagsService } from "./tags.service";

@Controller("tags")
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() DTO: any) {
    return await this.tagsService.create(DTO);
  }

  @Get()
  async findAll() {
    return await this.tagsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.tagsService.findOne(+id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() DTO: any) {
    return await this.tagsService.update(+id, DTO);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.tagsService.remove(+id);
  }
}
