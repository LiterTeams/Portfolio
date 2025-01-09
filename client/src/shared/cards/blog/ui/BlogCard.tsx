"use client";
import Link from "next/link";
import Image from "next/image";

import { BlogIF } from "@entities/interfaces/additional";
import dateTimeConvert from "@shared/lib/dateTimeConvert";
import routes from "@app/entities/config/routes";

const ImageLoader = () => {
    return(
        <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full bg-grey animate-pulse">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
    )
}

export default function BlogCard({title, description, image, created_at}:BlogIF){
    const id = 1;

    return(
        <div className="relative px-6 flex gap-4 group">
            <div className="absolute -z-[1] left-0 top-0 w-full h-full flex flex-center">
                <div className="bg-dark-secondaty w-full h-[90%] rounded-xl"/>
            </div>
            <div className="relative flex-[0_0_720px] h-[364px] rounded-xl overflow-hidden border border-solid border-white/15">
                <Image loading="lazy" fill quality={100} sizes="100vw" src={image} alt="" className={`object-cover group-hover:scale-105 duration-300`} />
                <span className="absolute pointer-events-none left-4 top-4 py-[2px] px-4 bg-dark-primary-alternative rounded-xl text-xs">Release</span>
                <span className="absolute pointer-events-none right-4 bottom-4 py-[2px] px-4 bg-dark-primary-alternative rounded-xl text-xs">2025.01.09</span>
            </div>
            <div className="flex flex-col py-10 gap-1 flex-grow">
                <Link href={`${routes.blog.href}/${id}`} className="text-lg">{title}</Link>
                <p className="text-grey text-xs flex-grow">{description}</p>
            </div>
        </div>
    )
}