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
const axios_1 = __importDefault(require("axios"));
class HttpClient {
    constructor(baseURL = 'https://authen-ve2i.onrender.com', apiKey) {
        this.client = axios_1.default.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiKey ? `Bearer ${apiKey}` : '',
            },
        });
    }
    get(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(url, config);
            return response.data;
        });
    }
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post(url, data, config);
            return response.data;
        });
    }
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.put(url, data, config);
            return response.data;
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.delete(url, config);
            return response.data;
        });
    }
}
exports.default = HttpClient;
//# sourceMappingURL=httpClient.js.map