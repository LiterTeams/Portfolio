"use client";
import useSearch from "@features/hooks/system/useSearch";
import useQueryProjects from "@features/hooks/queries/useQueryProjects";

import SearchNavbar from "@shared/navbars/search-navbar/ui/SearchNavbar";
import ProjectRatingSystem from "@shared/selects/project/ui/ProjectRatingSystem";
import Status from "@shared/selects/project/ui/Status";
import Tags from "@shared/selects/project/ui/Tags";

import Content from "@contents/projects/ui/Content";
import NotFound from "@contents/NotFound";
import Skeleton from "@contents/projects/ui/Skeleton";
import Error from "@contents/Error";

import routes from "@entities/config/routes";

export default function Projects({showSearch = false, title, className}:{showSearch?: boolean; title?: string; className?: string;}){
    
    const { searchParams, resetQueries } = useSearch();
    const { data, isLoading, isSuccess, isError, error, refetch } = useQueryProjects.getProjects(searchParams.toString());

    return(
        <>
            {showSearch && 
            <SearchNavbar className="mb-12">
                <Status />
                <ProjectRatingSystem />
                <Tags />
            </SearchNavbar>
            }
            {title && <h2 className="text-center text-5xl my-12">{title} [{isSuccess ? data.data.length : "*"}]</h2>}
            <section className={className}>
                {isLoading && <Skeleton />}
                {isSuccess && data.data.length == 0 && <NotFound message="Projects Not Found" backLink={routes.projects.href} refetch={resetQueries} />}
                {isSuccess && data.data.length != 0 && <Content data={data.data} />}
                {isError && <Error error={error.message} refetch={refetch} />}
            </section>
        </>
    )
}