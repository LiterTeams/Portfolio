"use client";
import Link from "next/link";
import Image from "next/image";
import useSearch from "@features/hooks/system/useSearch";
import useFormattedDate from "@features/hooks/system/useFormattedDate";

import { ProjectIF } from "@entities/interfaces/project.interfaces";

import routes from "@entities/config/routes";
import { ratingSystem, statusColor } from "@entities/config/variables";

export default function ProjectCard({id,slug,title,description,image,status,version,PRS,tags,created_at}:ProjectIF){
    
    const { handleSearch } = useSearch();

    const { formattedDate } = useFormattedDate(created_at, "Year.Month.Day", false);

    const clx = "px-3 py-[2px] rounded-xl";
    const sizes = "(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw";

    return(
        <div className="bg-dark-secondaty px-4 rounded-xl border border-solid border-white/15 duration-300 hover:border-white/25">
            <div className="relative flex flex-col h-full gap-[6px] -top-4">
                <Link href={`${routes.projects.href}/${id}`} className="relative group w-full h-56 overflow-hidden border border-solid border-white border-opacity-0 rounded-xl duration-300 hover:drop-shadow-glow_blue hover:border-opacity-25">
                    <Image quality={100} fill sizes={sizes} src={image} alt="" className="object-cover group-hover:scale-105 duration-300" />
                    <span className={`${clx} bg-dark-primary-alternative absolute right-4 bottom-4 text-xs`}>{formattedDate}</span>
                </Link>
                <div className="flex gap-1 mt-[6px]">
                    <Link href={`${routes.projects.href}/${id}`} className={`${clx} bg-dark-primary-alternative text-left text-sm flex-grow duration-300 hover:bg-blue hover:border-white/25 hover:drop-shadow-glow_blue`}>{title}</Link>
                    <Link href={`${routes.projects.href}?status=${status}`} className={`${clx} text-sm ${statusColor[status]}`}>{status}</Link>
                    <span className={`${clx} bg-dark-primary-alternative text-sm pointer-events-none`}>{version}</span>
                    <Link href={`${routes.projects.href}?project_rating_system=${PRS}`} className={`${clx} bg-dark-primary-alternative text-sm`}>{ratingSystem[PRS]}</Link>
                </div>
                <p className="text-grey text-xs text-pretty text-center">{description}</p>
                <hr className="w-full text-grey mt-auto"/>
                <ul className="flex flex-wrap gap-1">
                    {tags.map((tag, key) =>
                        <button
                            key={`${slug}-tag-${key}`}
                            onClick={() => handleSearch("tags", tag)}
                            // href={`${routes.projects.href}?tag=${tag}`}
                            className={`${clx} bg-dark-primary-alternative flex-grow text-center text-xs border border-solid border-white/15 duration-300 hover:bg-blue hover:border-white/25 hover:drop-shadow-glow_blue`}
                        >
                            {tag}
                        </button>
                    )}
                </ul>
            </div>
        </div>
    )
}