"use client";

import { useQuery } from "@tanstack/react-query";
import blogService from "@features/services/blog.service";

class UseQueryBlogs {
    
    getBlogs = (params: string | null = null) => {
        return useQuery({
            queryKey: ["blogs", params],
            queryFn: async () => blogService.getBlogs(params),
            select: ({ data }) => data,
            retry: 3,
        });
    }

    getBlogsBySlug = (slug: string) => {
        return useQuery({
            queryKey: ["blog", slug],
            queryFn: async () => blogService.getBlogBySlug(slug),
            retry: 3,
        });
    }

    getBlogsById = (id: string|number) => {
        return useQuery({
            queryKey: ["blog", id],
            queryFn: async () => blogService.getBlogById(id),
            select: ({ data }) => data,
            retry: 3,
        });
    }
}

const useQueryBlogs = new UseQueryBlogs();
export default useQueryBlogs;