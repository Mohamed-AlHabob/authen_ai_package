import HttpClient from '../utils/httpClient';
import { AnalysisModel } from '../types';

class ModelsAPI {
    private http: HttpClient;

    constructor(baseURL: string, apiKey?: string) {
        this.http = new HttpClient(baseURL, apiKey);
    }

    public async getModels(): Promise<AnalysisModel[]> {
        return this.http.get<AnalysisModel[]>('/models/');
    }

    public async getModel(id: string): Promise<AnalysisModel> {
        return this.http.get<AnalysisModel>(`/models/${id}/`);
    }
}

export default ModelsAPI;