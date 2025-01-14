"use client";

import Card from "@shared/cards/repository/ui/Card";

import { RepositoryIF } from "@entities/interfaces/repository.interfaces";

export default function Content({data}:{data: RepositoryIF[]}){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
            {data.map((dataItem, key) =>
                    <Card
                        key={`repository-${key}`}
                        id={dataItem.id}
                        name={dataItem.name}
                        description={dataItem.description}
                        html_url={dataItem.html_url}
                        owner={dataItem.owner}
                        language={dataItem.language}
                        license={dataItem.license}
                        updated_at={dataItem.updated_at}
                    />
                )}
        </div>
    )
}