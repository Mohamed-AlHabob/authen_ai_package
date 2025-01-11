"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.ModelsAPI = exports.VideosAPI = void 0;
const videos_1 = __importDefault(require("./ai/videos"));
exports.VideosAPI = videos_1.default;
const models_1 = __importDefault(require("./ai/models"));
exports.ModelsAPI = models_1.default;
const httpClient_1 = __importDefault(require("./utils/httpClient"));
exports.HttpClient = httpClient_1.default;
//# sourceMappingURL=index.js.map