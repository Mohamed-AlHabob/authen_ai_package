import HttpClient from '../utils/httpClient';
import { Video } from '../types';

class VideosAPI {
    private http: HttpClient;

    constructor(baseURL: string, apiKey?: string) {
        this.http = new HttpClient(baseURL, apiKey);
    }

    public async uploadVideo(file: File): Promise<Video> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<Video>('/videos/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    public async getVideo(id: string): Promise<Video> {
        return this.http.get<Video>(`/videos/${id}/`);
    }

    public async analyzeVideo(id: string): Promise<Video> {
        return this.http.post<Video>(`/videos/${id}/analyze/`);
    }
}

export default VideosAPI;