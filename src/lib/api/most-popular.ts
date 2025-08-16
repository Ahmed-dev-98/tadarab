import { apiClient } from "./client";
import { CoursesResponse } from "./courses";





export const mostPopularApi = {
    getMostPopularCourses: async ({
        page = 1,
        per_page = 10,
    }: {
        page?: number;
        per_page?: number;
    }): Promise<CoursesResponse> => {
        const response = await apiClient.get<CoursesResponse>(`/courses?page=${page}&per_page=${per_page}&filters[scope]=popular`);
        return response.data;
    }
}