import { ProjectStatusEnumT, ProjectRatingSystemEnumT } from "../types/enum.types";
import { _BaseIF, _MetaIF } from "./system.interfaces";

interface ProjectResponseIF {
    data: ProjectIF[];
    meta?: _MetaIF;
}

interface ProjectIF extends _BaseIF {
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    status: ProjectStatusEnumT;
    content?: string;
    version: string;
    PRS: ProjectRatingSystemEnumT;
}

export type { ProjectIF, ProjectResponseIF }