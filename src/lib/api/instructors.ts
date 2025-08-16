import { apiClient } from "./client";
import { Tutor } from "@/types/tutor";

export interface InstructorsResponse {
    data: Tutor[];
    pagination?: {
        "current": number,
        "previous": number | null,
        "next": number | null,
        "per_page": number,
        "pages": number,
        "count": number
    };
}

export const instructorsApi = {
    getInstructors: async ({
        page = 1,
        per_page = 10,
    }: {
        page?: number;
        per_page?: number;
    }): Promise<InstructorsResponse> => {
        const response = await apiClient.get<InstructorsResponse>(
            `/tutors?page=${page}&per_page=${per_page}`
        );
        return response.data
    },
};
