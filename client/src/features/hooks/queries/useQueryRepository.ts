"use client";

import { useQuery } from "@tanstack/react-query";
import repositoryService from "@app/features/services/repository.service";

class UseQueryRepository {
    getUserRepositories = (username: string) => {
        return useQuery({
            queryKey: ["repositories", username],
            queryFn: () => repositoryService.getRepositories(username),
            select: ({ data }) => data,
            retry: 3,
        });
    }
}

const useQueryRepository = new UseQueryRepository();
export default useQueryRepository;