"use client";

import BlogCard from "@shared/cards/blog/ui/BlogCard";

import { BlogIF } from "@entities/interfaces/blog.interfaces";

export default function Content({data}:{data: BlogIF[]}){
    return(
        <div className="flex flex-col gap-6">
            {data.map((dataItem, key) =>
                <BlogCard
                    key={`blog-${key}`}
                    id={dataItem.id}
                    title={dataItem.title}
                    description={dataItem.description}
                    image={dataItem.image}
                    created_at={dataItem.created_at}
                    updated_at={dataItem.updated_at}
                />)
            }
        </div>
    )
}