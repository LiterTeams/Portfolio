"use client";
import Link from "next/link";
import Image from "next/image";

import { BlogIF } from "@entities/interfaces/additional";
import dateTimeConvert from "@shared/lib/dateTimeConvert";
import routes from "@app/entities/config/routes";

export default function BlogCard({title, description, image, created_at}:BlogIF){

    const id = 1;

    return(
        <div className="relative px-6 flex gap-4 group">
            <div className="absolute -z-[1] left-0 top-0 w-full h-full flex flex-center">
                <div className="bg-dark-secondaty w-full h-[90%] rounded-xl"/>
            </div>
            <div className="relative flex-[0_0_720px] h-[364px] rounded-xl overflow-hidden border border-solid border-white/15">
                <Image fill quality={100} sizes="100vw" src={image} alt="" className="object-cover group-hover:scale-105 duration-300" />
                <span className="absolute pointer-events-none left-4 top-4 py-[2px] px-4 bg-dark-primary-alternative rounded-xl text-xs">Release</span>
                <span className="absolute pointer-events-none right-4 bottom-4 py-[2px] px-4 bg-dark-primary-alternative rounded-xl text-xs">{dateTimeConvert(created_at, "Year.Month.Day", false)}</span>
            </div>
            <div className="flex flex-col py-10 gap-1 flex-grow">
                <Link href={`${routes.blog.href}/${id}`} className="text-lg">{title}</Link>
                <p className="text-grey text-xs flex-grow">{description}</p>
            </div>
        </div>
    )
}