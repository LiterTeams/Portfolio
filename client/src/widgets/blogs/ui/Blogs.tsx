"use client";
import useQueryBlogs from "@features/hooks/queries/useQueryBlogs";

import SearchNavbar from "@shared/navbars/search-navbar/ui/SearchNavbar";
import Content from "@contents/blogs/ui/Content";
import Skeleton from "@contents/blogs/ui/Skeleton";
import Error from "@contents/blogs/ui/Error";

export default function Blogs({showSearch = false, className, title}:{showSearch?: boolean; className?: string; title?: string;}){
    
    const { data, isLoading, isSuccess, isError, error, refetch } = useQueryBlogs.getBlogs();

    return(
        <>
            {showSearch && <SearchNavbar className="mb-12" />}
            {title && <h2 className="text-center text-5xl my-4">{title}</h2>}
            <section className={className}>
                {isLoading && <Skeleton />}
                {isSuccess && <Content data={data.data} />}
                {isError && <Error error={error.message} refetch={refetch} />}
            </section>
        </>
    )
}