import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { ProjectsQueryParamsIF } from "src/interfaces/paginate.interface";

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

  async findAll(params: ProjectsQueryParamsIF) {
    const query = params.query || undefined;
    const status = params.status || undefined;
    const projectRatingSystem = params.project_rating_system || undefined;
    const tags = params.tags ? params.tags.split(" ") : undefined;
    const response = await this.DBService.project.findMany({
      where:{
        title: { startsWith: query, mode: "insensitive" },
        status: { equals: status },
        PRS: { equals: projectRatingSystem },
        tags: { some: { tag: { name: { in: tags } } } }
      },
      include:{ tags: { include: { tag: true } } }
    });
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
