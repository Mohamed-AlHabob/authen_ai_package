"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpClient_1 = __importDefault(require("../utils/httpClient"));
class VideosAPI {
    constructor(baseURL, apiKey) {
        this.http = new httpClient_1.default(baseURL, apiKey);
    }
    uploadVideo(file, onProgress, signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', file);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    if (onProgress && progressEvent.lengthComputable) {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        onProgress(percentCompleted);
                    }
                },
                signal,
            };
            return this.http.post('/videos/', formData);
        });
    }
    getVideo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(`/videos/${id}/`);
        });
    }
    updateVideoFeedback(id, feedback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.put(`/videos/${id}/`, { user_feedback: feedback });
        });
    }
    deleteVideo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.delete(`/videos/${id}/`);
        });
    }
}
exports.default = VideosAPI;
//# sourceMappingURL=videos.js.map