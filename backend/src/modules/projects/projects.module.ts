import { Module } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
import { TagsModule } from "../tags/tags.module";

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [TagsModule],
})
export class ProjectsModule {}
