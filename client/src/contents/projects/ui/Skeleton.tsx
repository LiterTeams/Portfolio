"use client";

import SkeletonCard from "@shared/cards/project/ui/SkeletonCard";

export default function Skeleton({items = 6}:{items?: number}){

    const data = Array(items).fill(0);

    return(
        <div className="grid grid-cols-3 gap-x-3 gap-y-9">
            {data.map((_, key) =>
                <SkeletonCard key={`project-skeleton-${key}`}/>
            )}
        </div>
    )
}