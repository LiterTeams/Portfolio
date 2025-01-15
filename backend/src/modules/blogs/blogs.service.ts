import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { QueryParamsIF } from "src/interfaces/paginate.interface";

@Injectable()
export class BlogsService {
  constructor(private readonly DBService: DatabaseService){}

  async create(DTO: any) {
    return 'This action adds a new project';
  }

  async getById(id: number) {
    const blog = await this.DBService.blog.findFirst({where:{id}});
    if (!blog) throw new NotFoundException("Blog Not Found!");
    return blog;
  }

  async getBySlug(slug: string) {
    const blog = await this.DBService.blog.findFirst({where:{slug}});
    if (!blog) throw new NotFoundException("Blog Not Found!");
    return blog;
  }

  async findAll(params: QueryParamsIF) {
    const query = params.query || undefined;
    const blogs = await this.DBService.blog.findMany({
      where: {
        title: { startsWith: query, mode: "insensitive" },
        visibility: "draft",
      }
    });
    return { data: blogs }
  }

  async update(id: number, DTO: any) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
