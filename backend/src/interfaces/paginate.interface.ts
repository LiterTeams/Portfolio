import { ContentStatusWIPEnumT, ProjectRatingSystemEnumT } from "src/types/enum.types";

interface PaginationOptionsIF {
    query: string;
    page: number;
    limit: number;
    route?: string;
}

interface QueryParamsIF {
    query: string;
    page: string;
    limit: string;
}

interface ProjectsQueryParamsIF extends QueryParamsIF {
    tags: string;
    status: ContentStatusWIPEnumT;
    project_rating_system: ProjectRatingSystemEnumT;
}

interface PaginationLinksIF {
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
}

export type {
    PaginationOptionsIF,
    PaginationLinksIF,
    QueryParamsIF,
    ProjectsQueryParamsIF,
}