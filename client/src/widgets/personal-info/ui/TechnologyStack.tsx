"use client";

import TechnologyStackCard from "@shared/cards/technology-stack/ui/TechnologyStackCard";
import { stack } from "@entities/config/variables";

export default function TechnologyStack({className}:{className?:string;}){

    return(
        <div className={`bg-dark-secondaty p-6 rounded-xl ${className}`}>
            <h2 className="mb-4 text-lg">Technology stack</h2>
            <div className="grid grid-cols-6 gap-1">
                {stack.map((item, key) =>
                    <TechnologyStackCard key={`stack-${key}`} label={item.label} icon={item.icon} />
                )}
            </div>
        </div>
    )
}