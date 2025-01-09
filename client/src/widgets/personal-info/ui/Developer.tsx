"use client";
import Image from "next/image";

import Avatar from "@public/assets/avatar.webp";

export default function Developer({className}:{className?:string;}){

    return(
        <div className={`bg-dark-secondaty px-6 rounded-xl ${className}`}>
            <div className="relative -top-4">
                <Image priority quality={100} width={400} height={564} src={Avatar} alt="avatar" className="rounded-xl" />
                <h2 className="text-lg text-center mt-4">Brandy Salfiya Sherrill</h2>
                <p className="text-grey text-center text-sm mt-1">Fullstack web application developer.</p>
                <p className="text-grey text-center text-sm mt-1">I've been developing for about 4.5 years.</p>
            </div>
        </div>
    )
}