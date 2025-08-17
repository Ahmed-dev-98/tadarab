import { Category } from '@/types/category';
import { apiClient } from './client';

export interface CategoriesResponse {
  data: Category[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const categoriesApi = {
  getCategories: async (): Promise<CategoriesResponse> => {
    const response = await apiClient.get<CategoriesResponse>(
      "/topics"
    );
    return response.data as {
      data: Category[];
    };
  },


};
