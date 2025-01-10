import { TechnologyStackEnumT, SocialEnumT } from "@entities/types/enum.types";
import { _BaseIF } from "./system.interfaces";

interface TechnologyStackIF {
    label: string;
    icon: TechnologyStackEnumT;
}

interface SocialIF {
    label: string;
    icon: SocialEnumT;
    href: string;
}

interface RepositoryIF extends Pick<_BaseIF, "created_at"> {
    label: string;
    description: string;
    code: string;
}

interface BlogIF extends _BaseIF {
    title: string;
    image: string;
    description: string;
}

export type { TechnologyStackIF, SocialIF, RepositoryIF, BlogIF }