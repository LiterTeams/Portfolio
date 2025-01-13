"use client";

import SkeletonCard from "@shared/cards/blog/ui/SkeletonCard";

export default function Skeleton({items = 2}:{items?: number}){

    const data = Array(items).fill(0);

    return(
        <div className="flex flex-col gap-6">
            {data.map((_, key) =>
                <SkeletonCard key={`project-skeleton-${key}`}/>
            )}
        </div>
    )
}