"use strict";
// scr/ai/process.ts
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
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
const utils_1 = require("./utils");
class Process {
    constructor(options) {
        if (!(0, utils_1.validateToken)(options.token)) {
            throw new Error('Invalid token provided.');
        }
        this.api = axios_1.default.create({
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
    sendFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            (0, utils_1.validateFilePath)(filePath);
            const formData = new form_data_1.default();
            formData.append('file', fs_1.default.createReadStream(filePath));
            try {
                const response = yield this.api.post('/api/videos', formData, {
                    headers: formData.getHeaders(),
                });
                return response.data;
            }
            catch (error) {
                const status = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'unknown';
                throw new Error(`Error sending file: ${error.message} (HTTP status: ${status})`);
            }
        });
    }
}
exports.default = Process;
//# sourceMappingURL=process.js.map