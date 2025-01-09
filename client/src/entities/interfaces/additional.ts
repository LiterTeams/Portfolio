import { TechnologyStackEnumT, SocialEnumT } from "@entities/types/enum.types";

interface TechnologyStackIF {
    label: string;
    icon: TechnologyStackEnumT;
}

interface SocialIF {
    label: string;
    icon: SocialEnumT;
    href: string;
}

interface RepositoryIF {
    label: string;
    description: string;
    code: string;
    created_at: Date;
}

interface BlogIF {
    title: string;
    image: string;
    description: string;
    created_at: Date;
}

export type { TechnologyStackIF, SocialIF, RepositoryIF, BlogIF }