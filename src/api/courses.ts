import { Course } from "@/types/course";
import { apiClient } from "./client";

export interface CoursesResponse {
    data: Course[];
    pagination?: {
        "current": number,
        "previous": number | null,
        "next": number | null,
        "per_page": number,
        "pages": number,
        "count": number
    };
}




export const coursesApi = {
    getBestsellingCourses: async ({
        page = 1,
        per_page = 10,
        scopes = ["best-seller"],
    }: {
        page?: number;
        per_page?: number;
        scopes?: string[];
    }): Promise<CoursesResponse> => {
        const filters = scopes.filter(s => s !== "null").map(s => `filters[scope]=${s}`).join("&");
        const response = await apiClient.get<CoursesResponse>(
            `/courses?page=${page}&per_page=${per_page}&${filters}`
        );
        return response.data
    },
};