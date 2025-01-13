import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class ProjectsService {
  constructor(private readonly DBService: DatabaseService){}
  
  async create(DTO: any) {
    return 'This action adds a new project';
  }

  async getById(id: number) {
    const project = await this.DBService.project.findFirst({where:{id}, include:{ tags: { include: { tag: true } } }});
    if (!project) throw new NotFoundException("Project Not Found!");
    let { tags } = project;
    const res = tags.map(tag => tag.tag.name);
    return {...project, tags: res};
  }

  async getBySlug(slug: string) {
    const project = await this.DBService.project.findFirst({where:{slug}, include:{ tags: { include: { tag: true } } }});
    if (!project) throw new NotFoundException("Project Not Found!");
    let { tags } = project;
    const res = tags.map(tag => tag.tag.name);
    return {...project, tags: res};
  }

  async findAll() {
    const response = await this.DBService.project.findMany({include:{ tags: { include: { tag: true } } }});
    const projects = response.map((res) => { return {...res, tags: res.tags.map(tag => tag.tag.name)} })
    return { data: projects }
  }

  async update(id: number, DTO: any) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
