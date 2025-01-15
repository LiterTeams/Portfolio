"use client";

import BlogCard from "@shared/cards/blog/ui/BlogCard";

import { BlogIF } from "@entities/interfaces/blog.interfaces";

export default function Content({data}:{data: BlogIF[]}){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-3 gap-y-6">
            {data.map((dataItem, key) =>
                <BlogCard
                    key={`blog-${key}`}
                    id={dataItem.id}
                    slug={dataItem.slug}
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