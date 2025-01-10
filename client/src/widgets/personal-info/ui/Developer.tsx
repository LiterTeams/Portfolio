"use client";
import Image from "next/image";

export default function Developer({className}:{className?:string;}){

    return(
        <div className={`bg-dark-secondaty px-6 rounded-xl ${className}`}>
            <div className="relative -top-4">
                <Image priority quality={100} width={400} height={564} src="https://i.pinimg.com/736x/4e/9f/1c/4e9f1cf74177824c3f954097ef4a6d11.jpg" alt="avatar" className="rounded-xl h-[564px] object-cover" />
                <h2 className="text-lg text-center mt-4">Brandy Salfiya Sherrill</h2>
                <p className="text-grey text-center text-sm mt-1">Fullstack web application developer.</p>
                <p className="text-grey text-center text-sm mt-1">I have been developing for about 4.5 years.</p>
            </div>
        </div>
    )
}