import { PrismaClient, Tag } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const tagsSeeder = async () => {
    console.log(`Creating Tags...`);
    const tags = [
        "react","nextjs","nestjs",
        "css","tailwind","scss",
        "typescript","javascript","git",
        "figma","postgresql","renpy",
        "python","unity","game","translation",
        "site","design","godot","C#","C++","rust",
        "laravel","mysql","php"
    ];

    const data: Omit<Tag, "created_at"|"updated_at">[] = tags.map((tag, index) => { return {id: index, name: tag} })
    await prisma.tag.createMany({data, skipDuplicates: true});
    console.log(`Created Tags`);
}

export default tagsSeeder;
