import { ProjectStatusEnumT as PSET, ProjectRatingSystemEnumT as PRST } from "@entities/types/enum.types";
import  { TechnologyStackIF, SocialIF, BlogIF } from "@entities/interfaces/additional";

const _date: Date = new Date("2025-01-01 16:20:09.207");

const stack: TechnologyStackIF[] = [
    {label: "HTML 5", icon: "html"},
    {label: "CSS 3", icon: "css"},
    {label: "SCSS", icon: "scss"},
    {label: "Tailwind CSS", icon: "tailwind"},
    {label: "JavaScript", icon: "js"},
    {label: "TypeScript", icon: "ts"},
    {label: "React", icon: "react"},
    {label: "NextJS", icon: "nextjs"},
    {label: "NestJS", icon: "nestjs"},
    {label: "NodeJS", icon: "nodejs"},
    {label: "Prisma ORM", icon: "prisma"},
    {label: "Graph QL", icon: "graphql"},
    {label: "PostgreSQL", icon: "postgresql"},
    {label: "Laravel", icon: "laravel"},
    {label: "Python", icon: "py"},
    {label: "Flask", icon: "flask"},
    {label: "Git", icon: "git"},
    {label: "Figma", icon: "figma"},
];

const socials: SocialIF[] = [
    {label: "Vkontakte", icon: "vk", href: "https://vk.com/clyoucker"},
    {label: "Telegram", icon: "telegram", href: "https://t.me/Clyoucker"},
    {label: "Twitter", icon: "twitter", href: "#"},
    {label: "Facebook", icon: "facebook", href: "#"},
    {label: "Discord", icon: "discord", href: "#"},
    {label: "YouTube", icon: "youtube", href: "#"},
    {label: "Boosty", icon: "boosty", href: "#"},
    {label: "Git", icon: "git", href: "https://github.com/LiterTeams"},
];

const blogs: BlogIF[] = [
    {
        id: 1,
        title: "Test Title",
        description: "Test Description",
        image: "https://sun9-41.userapi.com/impg/fCz4zghpOVJDGqL9rvd5_Njm_YyeD1XRrCE6VQ/6TAMkzFdH1o.jpg?size=1440x1800&quality=95&sign=c870a33dd305e773a550a7b5a5c4b198&type=album",
        created_at: _date,
        updated_at: _date,
    },
    {
        id: 3,
        title: "Test Title",
        description: "Test Description",
        image: "https://sun1-96.userapi.com/impg/af9YoRcg-AREYKKml1aHAamjP-jhcoFgnllKKg/SOPNTV3LzHU.jpg?size=2560x1650&quality=95&sign=78baf9fea66d6c786caee4b7176a8d7c&type=album",
        created_at: _date,
        updated_at: _date,
    },
    {
        id: 4,
        title: "Test Title",
        description: "Test Description",
        image: "https://sun9-33.userapi.com/impg/XWb6CzljDd7b96WnpiobnPfy2XwhPpwy5eUy2w/Xtye8RgGHfw.jpg?size=1200x848&quality=95&sign=f01e86d8b65ed855b959f8d4d98d5946&type=album",
        created_at: _date,
        updated_at: _date,
    },
    {
        id: 5,
        title: "Test Title",
        description: "Test Description",
        image: "https://sun9-50.userapi.com/impg/82Rnio3H4ANZdJJz181cLQmgosRCN76Ozg60Qg/8dYNYT_CvIY.jpg?size=1080x1578&quality=95&sign=9171fc1051cfed2be990c0590f899587&type=album",
        created_at: _date,
        updated_at: _date,
    },
    {
        id: 6,
        title: "Test Title",
        description: "Test Description",
        image: "https://sun1-13.userapi.com/impg/kW2VKo7EjRwSxGULZjPflH21Earyv5ZOIo0ltw/1AkvUuyzw0o.jpg?size=2560x1807&quality=96&sign=4b8f56e340c5bb8b07bcea28434bf934&type=album",
        created_at: _date,
        updated_at: _date,
    },
    {
        id: 7,
        title: "Test Title",
        description: "Test Description",
        image: "https://sun9-24.userapi.com/impg/UzG2BcY2xW6H5ENzEFk6vSb6eKOE6Wh1M3tsoQ/nwIhr-0FIak.jpg?size=2088x1514&quality=96&sign=345be2a6741a63289820a25a248db30a&type=album",
        created_at: _date,
        updated_at: _date,
    },
];

const ratingSystem: Record<PRST, string> = {
    "G": "0+",
    "PG": "6+",
    "PG13": "14+",
    "R": "16+",
    "NC17": "18+",
}

const statusColor: Record<PSET, string> = {
    "planned": "bg-white/50 drop-shadow-glow_white",
    "wip": "bg-blue drop-shadow-glow_blue",
    "supported": "bg-green drop-shadow-glow_green",
    "unsupported": "bg-orange drop-shadow-glow_orange",
    "closed": "bg-red drop-shadow-glow_red",
}

export { stack, socials, blogs, ratingSystem, statusColor }