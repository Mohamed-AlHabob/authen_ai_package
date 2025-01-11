import { AnalysisModel } from '../types';
declare class ModelsAPI {
    private http;
    constructor(baseURL: string, apiKey?: string);
    getModels(): Promise<AnalysisModel[]>;
    getModel(id: string): Promise<AnalysisModel>;
}
export default ModelsAPI;
