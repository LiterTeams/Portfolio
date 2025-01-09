"use client";
import { ReactNode } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLaravel, FaPython, FaGitAlt } from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNestjs, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFlaskFill, PiFigmaLogoFill } from "react-icons/pi";
import { TbBrandGraphql } from "react-icons/tb";

import { TechnologyStackEnumT } from "@entities/types/enum.types";
import { TechnologyStackIF } from "@entities/interfaces/additional";

const size = 36;
const iconClassName = "text-white";

const icons: Record<TechnologyStackEnumT, ReactNode> = {
    "html": <FaHtml5 size={size} className={iconClassName} />,
    "css": <FaCss3Alt size={size} className={iconClassName} />,
    "scss": <BsFiletypeScss size={size} className={iconClassName} />,
    "tailwind": <RiTailwindCssFill size={size} className={iconClassName} />,
    "js": <IoLogoJavascript size={size} className={iconClassName} />,
    "ts": <SiTypescript size={size} className={iconClassName} />,
    "react": <FaReact size={size} className={iconClassName} />,
    "nextjs": <RiNextjsFill size={size} className={iconClassName} />,
    "nestjs": <SiNestjs size={size} className={iconClassName} />,
    "nodejs": <FaNodeJs size={size} className={iconClassName} />,
    "prisma": <SiPrisma size={size} className={iconClassName} />,
    "graphql": <TbBrandGraphql size={size} className={iconClassName} />,
    "postgresql": <BiLogoPostgresql size={size} className={iconClassName} />,
    "laravel": <FaLaravel size={size} className={iconClassName} />,
    "py": <FaPython size={size} className={iconClassName} />,
    "flask": <PiFlaskFill size={size} className={iconClassName} />,
    "git": <FaGitAlt size={size} className={iconClassName} />,
    "figma": <PiFigmaLogoFill size={size} className={iconClassName} />,
};

export default function TechnologyStackCard({label, icon}:TechnologyStackIF){
    return(
        <div className="flex flex-center flex-col gap-2 bg-dark-primary-alternative p-2 rounded-xl border border-solid border-white/15 duration-300 hover:drop-shadow-glow_blue hover:bg-blue hover:border-white/25">
            {icons[icon]}
            <h3 className="text-sm text-center pointer-events-none">{label}</h3>
        </div>
    )
}