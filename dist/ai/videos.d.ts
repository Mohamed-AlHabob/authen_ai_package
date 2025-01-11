import { Video } from "../types";
declare class VideosAPI {
    private http;
    constructor(baseURL: string, apiKey?: string);
    uploadVideo(file: File): Promise<Video>;
    getVideo(id: string): Promise<Video>;
}
export default VideosAPI;
