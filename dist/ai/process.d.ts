interface ProcessOptions {
    baseURL: string;
    token: string;
    timeout?: number;
}
declare class Process {
    private api;
    constructor(options: ProcessOptions);
    /**
     * Sends a file to the `/authen/ai` endpoint.
     * @param filePath The path to the file.
     * @returns The response from the backend.
     */
    sendFile(filePath: string): Promise<any>;
}
export default Process;
