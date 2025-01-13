import { _BaseIF, _MetaIF } from "./system.interfaces";

interface BlogResponseIF {
    data: BlogIF[];
    meta?: _MetaIF;
}

interface BlogIF extends _BaseIF {
    title: string;
    image: string;
    description: string;

}

export type { BlogIF, BlogResponseIF }