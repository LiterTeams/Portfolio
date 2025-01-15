"use client";

import SkeletonCard from "@shared/cards/blog/ui/SkeletonCard";

export default function Skeleton({items = 6}:{items?: number}){

    const data = Array(items).fill(0);

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-3 gap-y-6">
            {data.map((_, key) =>
                <SkeletonCard key={`project-skeleton-${key}`}/>
            )}
        </div>
    )
}