"use client";

import { useQuery } from "@tanstack/react-query";
import projectService from "@features/services/project.service";

class UseQueryProjects {
    
    getProjects = (params: string | null = null) => {
        return useQuery({
            queryKey: ["projects", params],
            queryFn: async () => projectService.getProjects(params),
            select: ({ data }) => data,
            retry: 3,
        });
    }

    getProjectBySlug = (slug: string) => {
        return useQuery({
            queryKey: ["project", slug],
            queryFn: async () => projectService.getProjectBySlug(slug),
            retry: 3,
        });
    }

    getProjectById = (id: string|number) => {
        return useQuery({
            queryKey: ["project", id],
            queryFn: async () => projectService.getProjectById(id),
            retry: 3,
        });
    }
}

const useQueryProjects = new UseQueryProjects();
export default useQueryProjects;