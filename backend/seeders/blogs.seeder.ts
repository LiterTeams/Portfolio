import { PrismaClient, Blog } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

interface BlogIF extends Pick<Blog, "id"|"title"|"description"|"image">{}
interface DataBlogIF extends Omit<Blog, "created_at"|"visibility"|"content"|"updated_at">{}

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

const blogs: BlogIF[] = [
    {
        id: 1,
        title: "5 Laws Anyone Working in Anime Should Know",
        description: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        image: "https://i.pinimg.com/736x/a9/ad/90/a9ad90f9c3d2a761797946ebcda2c92d.jpg",
    },
    {
        id: 2,
        title: "The Ultimate Cheat Sheet on Anime",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        image: "https://i.pinimg.com/736x/61/7d/c7/617dc736cd201c57288827ab90add02b.jpg",
    },
    {
        id: 3,
        title: "The Urban Dictionary of Film",
        description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        image: "https://i.pinimg.com/736x/22/fa/bc/22fabcf0eedf4ebbbacdef9c91e6bcb2.jpg",
    },
    {
        id: 4,
        title: "How to Explain Games to Your Boss",
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "https://i.pinimg.com/736x/8c/a7/b9/8ca7b936a0f7f32c8be8bac14ec2187d.jpg",
    },
    {
        id: 5,
        title: "AI: All the Stats, Facts, and Data You'll Ever Need to Know",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        image: "https://i.pinimg.com/736x/ac/a8/6e/aca86e3e52b2e08ed8760d3179df8c57.jpg",
    },
    {
        id: 6,
        title: "What the Heck Is Film?",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: "https://i.pinimg.com/736x/b2/2e/b8/b22eb89821e7ed75298bfc4a3f666318.jpg",
    },
];

const blogsSeeder = async () => {
    console.log(`Creating Blogs...`);

    blogs.forEach((blog, index) => {
        blog["slug"] = `${slugGenerate(blog.title)}-${index}`;
    });
    await prisma.blog.createMany({data:blogs as DataBlogIF[], skipDuplicates: true});
    console.log(`Created Blogs`);
}

export default blogsSeeder;