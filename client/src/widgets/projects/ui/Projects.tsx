"use client";

import { projects } from "@entities/config/variables";

import ProjectCard from "@shared/cards/project/ui/ProjectCard";
import SearchNavbar from "@shared/navbars/search-navbar/ui/SearchNavbar";

export default function Projects({showSearch = false, title, className}:{showSearch?: boolean; title?: string; className?: string;}){
    return(
        <>
            {showSearch && <SearchNavbar className="mb-12" />}
            <section className={className}>
                {title && <h2 className="text-center text-5xl mb-12">{title}</h2>}
                <div className="grid grid-cols-3 gap-x-3 gap-y-9">
                    {projects.map((dataItem, key) =>
                        <ProjectCard
                            key={`project-${key}`}
                            id={dataItem.id}
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
            </section>
        </>
    )
}