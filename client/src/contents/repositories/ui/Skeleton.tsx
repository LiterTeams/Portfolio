"use client";

import CardSkeleton from "@shared/cards/repository/ui/Skeleton";

export default function Skeleton({items = 8}:{items?: number}){

    const data = Array(items).fill(0);

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
            {data.map((_, key) =>
                <CardSkeleton key={`repository-skeleton-${key}`}/>
            )}
        </div>
    )
}