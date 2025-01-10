"use client";
import Link from "next/link";
import Image from "next/image";
import useFormattedDate from "@features/hooks/system/useFormattedDate";

import { ProjectIF } from "@entities/interfaces/project.interfaces";

import routes from "@entities/config/routes";
import { ratingSystem } from "@entities/config/variables";

export default function ProjectCard({id,title,description,image,status,version,PRS,tags,created_at}:ProjectIF){
    const { formattedDate } = useFormattedDate(created_at, "Year.Month.Day", false);

    const clx = "bg-dark-primary-alternative px-3 py-[2px] rounded-xl";

    return(
        <div className="bg-dark-secondaty px-4 rounded-xl border border-solid border-white/15 duration-300 hover:border-white/25">
            <div className="relative flex flex-col gap-[6px] -top-4">
                <Link href={`${routes.projects.href}/${id}`} className="relative group w-full h-64 overflow-hidden border border-solid border-white border-opacity-0 rounded-xl duration-300 hover:drop-shadow-glow_blue hover:border-opacity-25">
                    <Image quality={100} fill sizes="100vw" src={image} alt="" className="object-cover group-hover:scale-105 duration-300" />
                    <span className={`${clx} absolute right-4 bottom-4 text-xs`}>{formattedDate}</span>
                </Link>
                <div className="flex gap-1 mt-[6px]">
                    <Link href={`${routes.projects.href}/${id}`} className={`${clx} text-left text-sm flex-grow duration-300 hover:bg-blue hover:border-white/25 hover:drop-shadow-glow_blue`}>{title}</Link>
                    <span className={`${clx} text-sm uppercase pointer-events-none`}>{status}</span>
                    <span className={`${clx} text-sm pointer-events-none`}>Ver {version}</span>
                    <span className={`${clx} text-sm pointer-events-none`}>{ratingSystem[PRS]}</span>
                </div>
                <p className="text-grey text-xs text-pretty text-center">{description}</p>
                <hr className="w-full text-grey"/>
                <ul className="flex flex-wrap gap-1">
                    {tags.map((tag, key) =>
                        <Link
                            key={`project-${title.replaceAll(" ", "-")}-tag-${key}`}
                            href={`${routes.blog.href}&tag=${tag.title.toLocaleLowerCase().replaceAll(" ", "-")}`}
                            className={`${clx} flex-grow text-center text-xs border border-solid border-white/15 duration-300 hover:bg-blue hover:border-white/25 hover:drop-shadow-glow_blue`}
                        >
                            {tag.title}
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}