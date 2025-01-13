import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ProjectsService } from "./projects.service";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() DTO: any) {
    return await this.projectsService.create(DTO);
  }

  @Get()
  async findAll() {
    return await this.projectsService.findAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return await this.projectsService.getById(+id);
  }

  @Get("/slug/:slug")
  async getBySlug(@Param("slug") slug: string) {
    return await this.projectsService.getBySlug(slug);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() DTO: any) {
    return await this.projectsService.update(+id, DTO);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.projectsService.remove(+id);
  }
}
