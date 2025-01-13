"use client";
import axios from "axios";
import { errorCatch } from "@api/api.helper";

import { RepositoryIF } from "@entities/interfaces/repository.interfaces";

const axiosInstance  = axios.create({
    baseURL: process.env.GITHUB_API_URL,
    timeout: 2000,
});

axiosInstance.interceptors.request.use(async config => {return config;});

axiosInstance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config;
    if (
        error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided" &&
        error.config && !error.config._isRetry
    ) {
        originalRequest._isRetry = true;
    }
    return error;
})

class RepositoryService {

    // getRepositories = async (usernames: string[]) => {
        // const repositories: RepositoryIF[] = await Promise.all(usernames.map( async username => (await this.getRepository(username)).data))
        // return repositories;
        // let repositories: RepositoryIF[] = []
        // usernames.forEach( async username => {
        //     const response = await this.getRepository(username);
        //     if ([200,201].includes(response.status)){
        //         repositories = response.data;
        //     }
        // });
        // console.log(repositories);
        // return repositories;

        // await Promise.all(titles.map(async title => await this.getByTitle(title, autoCreate)));
    // }

    getRepository = async (username: string) => {
        return await axiosInstance.get<RepositoryIF[]>(`/users/${username}/repos`);
    }
}

const repositoryService = new RepositoryService();
export default repositoryService;