import { AxiosRequestConfig } from 'axios';
import { UploadProgressCallback } from '../types';
declare class HttpClient {
    private client;
    constructor(baseURL?: string, apiKey?: string);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig, onUploadProgress?: UploadProgressCallback): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
export default HttpClient;
