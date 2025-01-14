"use client";
import Image from "next/image";
import useFormattedDate from "@features/hooks/system/useFormattedDate";

import { RiScales3Fill } from "react-icons/ri";

import { RepositoryIF } from "@entities/interfaces/repository.interfaces";

export default function Card({id, name, description, html_url, owner, license, language, updated_at}:Omit<RepositoryIF, "created_at">){

    const { formattedDate } = useFormattedDate(updated_at, "Year.Month.Day", false);

    return(
        <div id={String(id)} className={`bg-dark-primary-alternative p-3 rounded-xl flex flex-col gap-2 border border-solid border-white border-opacity-15 duration-300 hover:border-opacity-25`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <a target="_blank" href={html_url} className="block flex-grow text-sm text-white px-2 py-[2px] rounded-xl border border-solid border-white/15 duration-300 hover:bg-blue hover:drop-shadow-glow_blue">{name}</a>
                <a target="_blank" href={owner.html_url} className="flex flex-center gap-2 text-xs px-2 py-[2px] rounded-xl border border-solid border-white/15 duration-300 hover:bg-blue hover:drop-shadow-glow_blue">
                    <Image quality={50} width={20} height={20} className="size-5 object-cover rounded-full" src={owner.avatar_url} alt={`avatar ${owner.login}`} />
                    <p>{owner.login}</p>
                </a>
            </div>
            <hr className="text-white/15 pointer-events-none" />
            {description && <p className="text-grey text-xs pointer-events-none">{description}</p>}
            <div className="flex flex-wrap items-center gap-3 text-xs text-blue mt-auto">
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