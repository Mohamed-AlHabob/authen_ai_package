import { Video } from "../types";
import HttpClient from "../utils/httpClient";
import { UploadProgressCallback } from "../types";

class VideosAPI {
    private http: HttpClient;

    constructor(baseURL: string, apiKey?: string) {
        this.http = new HttpClient(baseURL, apiKey);
    }

    public async uploadVideo(
        file: File,
        onProgress?: UploadProgressCallback,
        signal?: AbortSignal
    ): Promise<Video> {
        const formData = new FormData();
        formData.append('file', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent: ProgressEvent) => {
                if (onProgress && progressEvent.lengthComputable) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    onProgress(percentCompleted);
                }
            },
            signal,
        };

        return this.http.post<Video>('/videos/', formData);
    }

    public async getVideo(id: string): Promise<Video> {
        return this.http.get<Video>(`/videos/${id}/`);
    }

    public async updateVideoFeedback(id: string, feedback: string): Promise<Video> {
        return this.http.put<Video>(`/videos/${id}/`, { user_feedback: feedback });
    }

    public async deleteVideo(id: string): Promise<void> {
        return this.http.delete<void>(`/videos/${id}/`);
    }
}

export default VideosAPI;