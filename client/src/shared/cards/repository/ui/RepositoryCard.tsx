"use client";
import useFormattedDate from "@features/hooks/system/useFormattedDate";

import { RiScales3Fill } from "react-icons/ri";

import { RepositoryIF } from "@entities/interfaces/repository.interfaces";

export default function RepositoryCard({className, id, name, description, html_url, license, language, updated_at}:Omit<RepositoryIF, "created_at"> & {className?: string;}){

    const { formattedDate } = useFormattedDate(updated_at, "Year.Month.Day", false);

    return(
        <div id={String(id)} className={`bg-dark-primary-alternative p-3 rounded-xl flex flex-col gap-2 border border-solid border-white/15 ${className}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <a target="_blank" href={html_url} className="block text-base text-blue">{name}</a>
                <span className="text-xs px-3 py-[2px] rounded-xl border border-solid border-white/15 pointer-events-none">Public</span>
            </div>
            <hr className="text-white/15 pointer-events-none" />
            {description && <p className="text-grey text-xs pointer-events-none">{description}</p>}
            <div className="flex flex-wrap items-center gap-3 text-xs text-blue">
                {language &&
                    <div className="flex items-center gap-[6px] pointer-events-none">
                        <span className="size-2 rounded-full bg-blue" />
                        <p>{language}</p>
                    </div>
                }
                {license &&
                    <div className="flex items-center gap-[6px]">
                        <RiScales3Fill size={16} className="text-grey" />
                        <a target="_blank" href={license.url}>{license.name}</a>
                    </div>
                }
                <p className="pointer-events-none">Updated {formattedDate}</p>
            </div>
        </div>
    )
}