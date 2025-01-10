import { _BaseIF } from "./system.interfaces";

interface TagIF extends Pick<_BaseIF, "id"> {
    title: string;
}

export type { TagIF }