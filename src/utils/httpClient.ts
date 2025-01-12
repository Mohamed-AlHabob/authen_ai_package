import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosProgressEvent } from 'axios';
import { UploadProgressCallback } from '../types';

class HttpClient {
    private client: AxiosInstance;

    constructor(baseURL: string = 'https://authen-backend-22yr.onrender.com/api', apiKey?: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Authorization': apiKey ? `Bearer ${apiKey}` : '',
            },
        });
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.get(url, config);
        return response.data;
    }

    public async post<T>(
        url: string, 
        data?: any, 
        config?: AxiosRequestConfig,
        onUploadProgress?: UploadProgressCallback
    ): Promise<T> {
        const configWithProgress: AxiosRequestConfig = {
            ...config,
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                if (progressEvent.total && onUploadProgress) {
                    const progress = (progressEvent.loaded / progressEvent.total) * 100;
                    onUploadProgress(progress);
                }
            },
        };

        const response: AxiosResponse<T> = await this.client.post(url, data, configWithProgress);
        return response.data;
    }

    public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.put(url, data, config);
        return response.data;
    }

    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.delete(url, config);
        return response.data;
    }
}

export default HttpClient;