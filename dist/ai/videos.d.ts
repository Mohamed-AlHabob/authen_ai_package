import { Video } from "../types";
import { UploadProgressCallback } from "../types";
declare class VideosAPI {
    private http;
    constructor(baseURL: string, apiKey?: string);
    uploadVideo(file: File, onProgress?: UploadProgressCallback, signal?: AbortSignal): Promise<Video>;
    getVideo(id: string): Promise<Video>;
    updateVideoFeedback(id: string, feedback: string): Promise<Video>;
    deleteVideo(id: string): Promise<void>;
}
export default VideosAPI;
