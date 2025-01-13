import { PrismaClient, Project } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

interface ProjectIF extends Pick<Project, "id"|"title"|"description"|"image"|"version"|"status"|"PRS">{tags: string[]}
interface DataProjectIF extends Omit<Project, "created_at"|"visibility"|"content"|"updated_at">{}

const slugGenerate = (value:string): string => {
    let answer = "";
    const converter: { [key: string]: string } = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya',
	};

    for (let i = 0; i < value.length; ++i ) {
		if (converter[value[i]] == undefined){
			answer += value[i];
		} else {
			answer += converter[value[i]];
		}
	}
 
	return answer.toLowerCase().replaceAll(" ", "-");
}

const projects: ProjectIF[] = [
    {
        id: 1,
        title: "Dragon Age",
        description: "A web service, the purpose of which is to provide users with a platform for conducting DND games.",
        image: "https://i.pinimg.com/736x/9f/50/09/9f5009577053d4801427e86b1415f0dd.jpg",
        version: "Alpha 1.5.2",
        status: "wip",
        PRS: "PG",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 2,
        title: "OS Web Argon",
        description: "https://i.pinimg.com/736x/88/6a/2b/886a2b95b801c299c79f8eaed01f5ef7.jpg",
        image: "A site for improving videos, images, parsing and publishing content on social networks.",
        version: "Alpha 0.5.0",
        status: "wip",
        PRS: "PG",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 3,
        title: "Patreon Alternative",
        description: "Analogue of Patreon",
        image: "https://i.pinimg.com/736x/f8/87/cf/f887cf0e6716f10f9fcf77b9a9126ac4.jpg",
        version: "unknown",
        status: "planned",
        PRS: "NC17",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 4,
        title: "Argon",
        description: "Website content management system and database.",
        image: "https://i.pinimg.com/736x/a6/ba/5b/a6ba5b09d9d312907cab534ba8ddf53e.jpg",
        version: "Beta 2.5",
        status: "wip",
        PRS: "G",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 5,
        title: "Yummy Anime 2.0",
        description: "a site for viewing and publishing anime and manga.",
        image: "https://i.pinimg.com/736x/f8/02/aa/f802aa63db75a2858d46ece3800ac2da.jpg",
        version: "unknown",
        status: "planned",
        PRS: "R",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 6,
        title: "Bite 2.0",
        description: "Online store",
        image: "https://i.pinimg.com/736x/b0/7e/b2/b07eb28c66ae7e29bb52e031745706be.jpg",
        version: "Beta 1.0.0",
        status: "unsupported",
        PRS: "G",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 7,
        title: "Electron",
        description: "Online store of household appliances",
        image: "https://i.pinimg.com/736x/e3/02/0c/e3020c84aa4e898270fd9ca4c2f5c712.jpg",
        version: "Alpha 1.0.0",
        status: "unsupported",
        PRS: "G",
        tags: ["site","react","javascript","scss"],
    },
    {
        id: 8,
        title: "Discord Alternative",
        description: "Analogue of Discord",
        image: "https://i.pinimg.com/736x/aa/b3/c1/aab3c1a8641fef428542e38ff59743a7.jpg",
        version: "unknown",
        status: "planned",
        PRS: "PG",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 9,
        title: "Foxhole Teams",
        description: "Unknown",
        image: "https://i.pinimg.com/736x/95/e9/b0/95e9b05220c0718c2f05e45844774ad8.jpg",
        version: "Alpha 1.0.0",
        status: "closed",
        PRS: "PG",
        tags: ["site","laravel","php","mysql"],
    },
    {
        id: 10,
        title: "Portfolio",
        description: "Personal portfolio",
        image: "https://i.pinimg.com/736x/18/99/e1/1899e1dbd663e8fc6facb3613ea11dc2.jpg",
        version: "Stable 1.0.0",
        status: "supported",
        PRS: "PG",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 11,
        title: "Ero Hub",
        description: "Porn site borrowing ideas from vk, boosty and pornhub",
        image: "https://i.pinimg.com/736x/a6/42/ae/a642ae26723749221a8e505826a7cb5a.jpg",
        version: "Alpha 2.5.2",
        status: "wip",
        PRS: "NC17",
        tags: ["site","nextjs","nestjs","typescript","tailwind","prisma","postgresql"],
    },
    {
        id: 12,
        title: "Succubus Reborn",
        description: "Translation of porn game",
        image: "https://i.pinimg.com/736x/f3/d5/51/f3d551981091b221e346f4aae41baecc.jpg",
        version: "20240629a",
        status: "wip",
        PRS: "NC17",
        tags: ["translation","unity","game"],
    },
    {
        id: 13,
        title: "Monster Hunter",
        description: "Development of a porn game",
        image: "https://i.pinimg.com/736x/f4/01/93/f40193e88cd7167a6103797307a32212.jpg",
        version: "unknown",
        status: "planned",
        PRS: "NC17",
        tags: ["game","godot","C#"],
    },
    {
        id: 14,
        title: "Nights of Temptation",
        description: "Translation of porn game",
        image: "https://i.pinimg.com/736x/ea/8c/13/ea8c13e15d906fcaa6cf7347a226216c.jpg",
        version: "20240304",
        status: "wip",
        PRS: "NC17",
        tags: ["translation","renpy","python","game"],
    },
];

const projectsSeeder = async () => {
    console.log(`Creating Projects...`);

    const projectData = projects.map(({ ["tags"]: _, ...rest }) => rest);
    projectData.forEach((project, index) => {
        project["slug"] = `${slugGenerate(project.title)}-${index}`;
    });
    await prisma.project.createMany({data:projectData as DataProjectIF[], skipDuplicates: true});
    console.log(`Created Projects`);
}

const projectTagsSeeders = async () => {
    console.log(`Creating Project Tags...`);
    projects.forEach(async projectItem => {
        projectItem.tags.forEach(async projectItemTag => {
            await prisma.projectTags.create({
                data: {
                    project: { connect: { id: projectItem.id } },
                    tag: {
                        connectOrCreate: {
                            where: { name: projectItemTag }, 
                            create: { name: projectItemTag } 
                        }
                    }
                }
            })
        });
    });
    console.log(`Created Project Tags`);
}

export { projectsSeeder, projectTagsSeeders };