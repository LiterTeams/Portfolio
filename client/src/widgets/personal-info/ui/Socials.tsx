"use client";

import SocialCard from "@shared/cards/social/ui/SocialCard";
import { socials } from "@entities/config/variables";

export default function Socials({className}:{className?:string;}){

    return(
        <div className={`bg-dark-secondaty p-6 rounded-xl ${className}`}>
            <h2 className="mb-4 text-lg">Socials</h2>
            <div className="grid grid-cols-4 gap-1">
                {socials.map((item, key) =>
                    <SocialCard key={`social-${key}`} label={item.label} icon={item.icon} href={item.href} />
                )}
            </div>
        </div>
    )
}