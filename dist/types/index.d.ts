export interface Video {
    id: string;
    file: string;
    analysis_date?: string;
    analysis_details?: any;
    model?: string;
    analysis_result?: boolean;
    user_feedback?: string;
}
export interface AnalysisModel {
    id: string;
    name: string;
    version: string;
    created_at: string;
    description: string;
    file: string;
}
export interface UploadProgressCallback {
    (progress: number): void;
}
export interface ApiError extends Error {
    response?: {
        data?: {
            message?: string;
        };
        status?: number;
    };
}
