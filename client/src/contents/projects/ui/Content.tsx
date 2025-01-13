"use client";

import ProjectCard from "@shared/cards/project/ui/ProjectCard";

import { ProjectIF } from "@entities/interfaces/project.interfaces";

export default function Content({data}:{data: ProjectIF[]}){
    return(
        <div className="grid grid-cols-3 gap-x-3 gap-y-9">
            {data.map((dataItem, key) =>
                <ProjectCard
                    key={`project-${key}`}
                    id={dataItem.id}
                    slug={dataItem.slug}
                    title={dataItem.title}
                    image={dataItem.image}
                    description={dataItem.description}
                    tags={dataItem.tags}
                    status={dataItem.status}
                    version={dataItem.version}
                    PRS={dataItem.PRS}
                    created_at={dataItem.created_at}
                    updated_at={dataItem.updated_at}
                />
            )}
        </div>
    )
}