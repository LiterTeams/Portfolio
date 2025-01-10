import { _BaseIF } from "./system.interfaces";

interface RepositoryLicenseIF {
    name: string;
    url: string;
}

interface RepositoryIF extends _BaseIF {
    name: string;
    description: string;
    language: string;
    license: RepositoryLicenseIF;
    html_url: string;
}

interface RepositoryResponseIF {
    data: RepositoryIF[];
}

export type { RepositoryIF, RepositoryResponseIF }