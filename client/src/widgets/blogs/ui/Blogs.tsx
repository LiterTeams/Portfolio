"use client";
import useSearch from "@features/hooks/system/useSearch";
import useQueryBlogs from "@features/hooks/queries/useQueryBlogs";

import SearchNavbar from "@shared/navbars/search-navbar/ui/SearchNavbar";
import Content from "@contents/blogs/ui/Content";
import NotFound from "@contents/NotFound";
import Skeleton from "@contents/blogs/ui/Skeleton";
import Error from "@contents/Error";

import routes from "@entities/config/routes";

export default function Blogs({showSearch = false, className, title}:{showSearch?: boolean; className?: string; title?: string;}){
    
    const { searchParams, resetQueries } = useSearch();
    const { data, isLoading, isSuccess, isError, error, refetch } = useQueryBlogs.getBlogs(searchParams.toString());

    return(
        <>
            {showSearch && <SearchNavbar className="mb-12" />}
            {title && <h2 className="text-center text-5xl my-4">{title}</h2>}
            <section className={className}>
                {isLoading && <Skeleton />}
                {isSuccess && data.data.length == 0 && <NotFound message="Blogs Not Found" backLink={routes.blog.href} refetch={resetQueries} />}
                {isSuccess && data.data.length != 0 && <Content data={data.data} />}
                {isError && <Error error={error.message} refetch={refetch} />}
            </section>
        </>
    )
}