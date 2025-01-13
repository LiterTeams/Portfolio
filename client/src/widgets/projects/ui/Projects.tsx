"use client";
import useQueryProjects from "@features/hooks/queries/useQueryProjects";

import SearchNavbar from "@shared/navbars/search-navbar/ui/SearchNavbar";
import Content from "@contents/projects/ui/Content";
import Skeleton from "@contents/projects/ui/Skeleton";
import Error from "@app/contents/projects/ui/Error";

export default function Projects({showSearch = false, title, className}:{showSearch?: boolean; title?: string; className?: string;}){

    const { data, isLoading, isSuccess, isError, error, refetch } = useQueryProjects.getProjects();

    return(
        <>
            {showSearch && <SearchNavbar className="mb-12" />}
            {title && <h2 className="text-center text-5xl my-12">{title}</h2>}
            <section className={className}>
                {isLoading && <Skeleton />}
                {isSuccess && <Content data={data.data} />}
                {isError && <Error error={error.message} refetch={refetch} />}
            </section>
        </>
    )
}