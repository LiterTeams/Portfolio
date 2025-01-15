import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from "@nestjs/common";
import { BlogsService } from "./blogs.service";
import { QueryParamsIF } from "src/interfaces/paginate.interface";

@Controller("blogs")
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() DTO: any) {
    return await this.blogsService.create(DTO);
  }

  @Get()
  async findAll(@Query() params: QueryParamsIF) {
    return await this.blogsService.findAll(params);
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return await this.blogsService.getById(+id);
  }

  @Get("/slug/:slug")
  async getBySlug(@Param("slug") slug: string) {
    return await this.blogsService.getBySlug(slug);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() DTO: any) {
    return await this.blogsService.update(+id, DTO);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.blogsService.remove(+id);
  }
}
