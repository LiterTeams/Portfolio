"use client";

import useQueryRepository from "@features/hooks/queries/useQueryRepository";
import RepositoryCard from "@shared/cards/repository/ui/RepositoryCard";

export default function Repository({className}:{className?:string;}){

    let error: string | null = null;
    // const { data: repositories, isError, isLoading, isSuccess, error } = useQueryRepository.getUserRepositories(["LiterTeams","SalfiyaNSFW"])
    const RepositoryLT = useQueryRepository.getUserRepository("LiterTeams");
    const RepositorySNSFW = useQueryRepository.getUserRepository("SalfiyaNSFW");

    if (RepositoryLT.isError && RepositorySNSFW.isError){
        error = RepositoryLT.error.message || RepositorySNSFW.error.message;
    }

    return(
        <div className={`bg-dark-secondaty p-6 rounded-xl ${className}`}>
            <h2 className="mb-4 text-lg">Repository</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
                {RepositoryLT.isLoading || RepositorySNSFW.isLoading && <h2>Loading...</h2>}
                {RepositoryLT.isError || RepositorySNSFW.isError && <h2>{error}</h2>}
                {RepositoryLT.isSuccess &&
                    RepositoryLT.data.map((dataItem, key) =>
                        <RepositoryCard
                            key={`repository-lt-${key}`}
                            className="flex-grow"
                            id={dataItem.id}
                            name={dataItem.name}
                            description={dataItem.description}
                            html_url={dataItem.html_url}
                            owner={dataItem.owner}
                            language={dataItem.language}
                            license={dataItem.license}
                            updated_at={dataItem.updated_at}
                        />
                    )
                }
                {RepositorySNSFW.isSuccess &&
                    RepositorySNSFW.data.map((dataItem, key) =>
                        <RepositoryCard
                            key={`repository-salfiya-${key}`}
                            className="flex-grow"
                            id={dataItem.id}
                            name={dataItem.name}
                            description={dataItem.description}
                            html_url={dataItem.html_url}
                            owner={dataItem.owner}
                            language={dataItem.language}
                            license={dataItem.license}
                            updated_at={dataItem.updated_at}
                        />
                    )
                }
            </div>
        </div>
    )
}