import { ProjectStatusEnumT as PSET, ProjectRatingSystemEnumT as PRST } from "@entities/types/enum.types";
import  { TechnologyStackIF, SocialIF } from "@entities/interfaces/additional";

import routes from "./routes";

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

const headerLinksNavigation = [
    {label: routes.home.label, href: routes.home.href, block: routes.home.block},
    {label: routes.about.label, href: routes.about.href, block: routes.about.block},
    {label: routes.services.label, href: routes.services.href, block: routes.services.block},
    {label: routes.projects.label, href: routes.projects.href, block: routes.projects.block},
    {label: routes.repositories.label, href: routes.repositories.href, block: routes.repositories.block},
    {label: routes.blog.label, href: routes.blog.href, block: routes.blog.block},
    {label: routes.connect.label, href: routes.connect.href, block: routes.connect.block},
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

export { stack, socials, headerLinksNavigation, ratingSystem, statusColor }