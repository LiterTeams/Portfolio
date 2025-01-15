"use client";
import Link from "next/link";
import Image from "next/image";
import useFormattedDate from "@features/hooks/system/useFormattedDate";

import formatMessage from "@shared/lib/formatMessage";

import { BlogIF } from "@entities/interfaces/additional";
import routes from "@entities/config/routes";

export default function BlogCard({id, title, description, image, created_at}:BlogIF){
    
    const { formattedDate } = useFormattedDate(created_at, "Year.Month.Day", false);
    const sizes = "(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 25vw";

    return(
        <div className="flex flex-col gap-3 group">
            <Link href={`${routes.blog.href}/${id}`} className="relative block duration-300 w-full border border-solid border-white border-opacity-0 h-64 overflow-hidden rounded-xl hover:drop-shadow-glow_blue hover:border-opacity-25">
                <Image loading="lazy" fill quality={100} sizes={sizes} src={image} alt="" className={`object-cover group-hover:scale-105 duration-300`} />
                <span className="absolute pointer-events-none right-2 bottom-2 py-[2px] px-4 bg-dark-primary-alternative rounded-xl text-xs">{formattedDate}</span>
            </Link>
            <Link href={`${routes.blog.href}/${id}`} className="text-sm duration-300 hover:text-blue">{formatMessage(title, 64)}</Link>
            <p className="text-grey text-xs text-pretty flex-grow">{formatMessage(description, 128)}</p>
        </div>
    )
}