import { ProjectStatusEnumT, ProjectRatingSystemEnumT } from "../types/enum.types";
import { _BaseIF } from "./system.interfaces";
import { TagIF } from "./tags.interfaces";

interface ProjectIF extends _BaseIF {
    title: string;
    description: string;
    image: string;
    tags: TagIF[];
    status: ProjectStatusEnumT;
    version: string;
    PRS: ProjectRatingSystemEnumT;
}

export type { ProjectIF }