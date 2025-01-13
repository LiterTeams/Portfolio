import axiosInstance from "@api/api.interceptor";

import { BlogIF, BlogResponseIF } from "@entities/interfaces/blog.interfaces";

class BlogService {
    getBlogs = async () => {
        return await axiosInstance.get<BlogResponseIF>("/blogs");
    }
    getBlogBySlug = async (slug:string) => {
        return await axiosInstance.get<BlogIF>(`/blogs/slug/${slug}`);
    }
    getBlogById = async (id:string|number) => {
        return await axiosInstance.get<BlogIF>(`/blogs/${id}`);
    }
}

const blogService = new BlogService();
export default blogService;