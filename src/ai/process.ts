// scr/ai/process.ts

import axios, { AxiosInstance } from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import { validateToken, validateFilePath } from './utils';

interface ProcessOptions {
  baseURL: string;
  token: string;
  timeout?: number;
}

class Process {
  private api: AxiosInstance;

  constructor(options: ProcessOptions) {
    if (!validateToken(options.token)) {
      throw new Error('Invalid token provided.');
    }

    this.api = axios.create({
      baseURL: options.baseURL,
      headers: {
        Authorization: `Bearer ${options.token}`,
      },
      timeout: options.timeout || 5000, // Default timeout of 5 seconds
    });
  }

  /**
   * Sends a file to the `/authen/ai` endpoint.
   * @param filePath The path to the file.
   * @returns The response from the backend.
   */
  async sendFile(filePath: string): Promise<any> {
    validateFilePath(filePath);

    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));

    try {
      const response = await this.api.post('/api/videos', formData, {
        headers: formData.getHeaders(),
      });
      return response.data;
    } catch (error: any) {
      const status = error.response?.status || 'unknown';
      throw new Error(`Error sending file: ${error.message} (HTTP status: ${status})`);
    }
  }
}

export default Process;
