import axios, { AxiosInstance, } from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

