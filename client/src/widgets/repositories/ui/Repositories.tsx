"use client";
import useQueryRepository from "@features/hooks/queries/useQueryRepository";

import SearchNavbar from "@shared/navbars/search-navbar/ui/SearchNavbar";
import Content from "@contents/repositories/ui/Content";
import Skeleton from "@contents/repositories/ui/Skeleton";
import Error from "@app/contents/repositories/ui/Error";

export default function Repositories({showSearch = false, title, className}:{showSearch?: boolean; title?: string; className?: string;}){

    const { data, isError, isLoading, isSuccess, error, refetch } = useQueryRepository.getUserRepositories(["LiterTeams","SalfiyaNSFW","Clyoucker"]);

    return(
        <>
            {showSearch && <SearchNavbar disabled className="mb-12" />}
            {title && <h2 className="text-center text-5xl my-12">{title}</h2>}
            <section className={className}>
                {isLoading && <Skeleton />}
                {isSuccess && <Content data={data} />}
                {isError && <Error error={error.message} refetch={refetch} />}
            </section>
        </>
    )
}