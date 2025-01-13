import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule as Config } from "@nestjs/config";

import { DatabaseModule as Database } from "../database/database.module";
import { TokenModule as Token } from "../token/token.module";
import { UsersModule as User } from "../users/users.module";
import { TagsModule as Tags } from "../tags/tags.module";
import { ProjectsModule as Projects } from "../projects/projects.module";
import { BlogsModule as Blogs } from "../blogs/blogs.module";

import config from "../../configs/config";

@Module({
    imports: [
        Config.forRoot({isGlobal: true, load: [config]}),
        Database,
        Token,
        User,
        Tags,
        Projects,
        Blogs,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
