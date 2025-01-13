// <------ Imports ------> //
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

import privilegeSeeder from "./privilege.seeders";
import userSeeder from "./user.seeders";
import tagsSeeder from "./tags.seeder";
import blogsSeeder from "./blogs.seeder";
import { projectsSeeder, projectTagsSeeders } from "./projects.seeder";

// <------ Init ------> //

const prisma = new PrismaClient();
dotenv.config();

// <------ Sedders ------> //

const seeders = async () => {
    console.log("Start Seeding...");

    await userSeeder();
    await privilegeSeeder();
    
    await tagsSeeder();

    await blogsSeeder();

    await projectsSeeder();
    await projectTagsSeeders();

    console.log("End Seeding");
}

// <------ Void ------> //

seeders()
    .catch(error => console.log(error))
    .finally(async () => {await prisma.$disconnect()});