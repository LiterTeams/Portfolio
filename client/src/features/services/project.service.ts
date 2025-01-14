import axiosInstance from "@api/api.interceptor";

import { ProjectIF, ProjectResponseIF } from "@entities/interfaces/project.interfaces";

class ProjectService {
    getProjects = async (params: string | null = null) => {
        return await axiosInstance.get<ProjectResponseIF>(params ? `/projects?${params}` : "/projects");
    }
    getProjectBySlug = async (slug:string) => {
        return await axiosInstance.get<ProjectIF>(`/projects/slug/${slug}`);
    }
    getProjectById = async (id:string|number) => {
        return await axiosInstance.get<ProjectIF>(`/projects/${id}`);
    }
}

const projectService = new ProjectService();
export default projectService;