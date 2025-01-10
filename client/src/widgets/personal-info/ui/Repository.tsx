"use client";

import useQueryRepository from "@features/hooks/queries/useQueryRepository";
import RepositoryCard from "@shared/cards/repository/ui/RepositoryCard";

export default function Repository({className}:{className?:string;}){

    const { data, isError, isLoading, isSuccess, error } = useQueryRepository.getUserRepositories("LiterTeams");

    return(
        <div className={`bg-dark-secondaty p-6 rounded-xl ${className}`}>
            <h2 className="mb-4 text-lg">Repository</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
                {isLoading && <h2>Loading...</h2>}
                {isError && <h2>{error.message}</h2>}
                {isSuccess &&
                    data.map((dataItem, key) =>
                        <RepositoryCard
                            key={`repository-${key}`}
                            className="flex-grow"
                            id={dataItem.id}
                            name={dataItem.name}
                            description={dataItem.description}
                            html_url={dataItem.html_url}
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