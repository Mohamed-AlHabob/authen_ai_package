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
