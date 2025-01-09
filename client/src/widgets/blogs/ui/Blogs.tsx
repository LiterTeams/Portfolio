"use client";

import BlogCard from "@shared/cards/blog/ui/BlogCard";

import { blogs } from "@entities/config/variables";

export default function Blogs({showLast = false, className, title}:{showLast?:boolean; className?: string; title?: string;}){
    return(
        <section className={className}>
            {title && <h2 className="text-center text-5xl mb-4">{title}</h2>}
            <div className="flex flex-col gap-6">
                {showLast 
                ? blogs.slice(-1, blogs.length).map((dataItem, key) =>
                    <BlogCard
                        key={`blog-${key}`}
                        title={dataItem.title}
                        description={dataItem.description}
                        image={dataItem.image}
                        created_at={dataItem.created_at}
                    />)
                : blogs.map((dataItem, key) =>
                    <BlogCard
                        key={`blog-${key}`}
                        title={dataItem.title}
                        description={dataItem.description}
                        image={dataItem.image}
                        created_at={dataItem.created_at}
                    />)
                }
            </div>
        </section>
    )
}