import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class TagsService {
  constructor(private readonly DBService: DatabaseService){}

  async create(DTO: any) {
    return 'This action adds a new project';
  }

  async findAll() {
    return `This action returns all projects`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: number, DTO: any) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
