"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = validateToken;
exports.validateFilePath = validateFilePath;
const fs_1 = __importDefault(require("fs"));
/**
 * Validates the provided token.
 * @param token The token to validate.
 * @returns True if the token is valid, otherwise false.
 */
function validateToken(token) {
    const isValid = typeof token === 'string' && token.length > 10;
    if (!isValid) {
        console.error('Token validation failed.');
    }
    return isValid;
}
/**
 * Validates the file path.
 * @param filePath The file path to validate.
 * @throws Error if the file path is invalid.
 */
function validateFilePath(filePath) {
    if (!fs_1.default.existsSync(filePath)) {
        console.error(`File validation failed. Path does not exist: ${filePath}`);
        throw new Error(`File not found: ${filePath}`);
    }
    try {
        fs_1.default.accessSync(filePath, fs_1.default.constants.R_OK);
    }
    catch (_a) {
        console.error(`File validation failed. Path is not readable: ${filePath}`);
        throw new Error(`File not readable: ${filePath}`);
    }
}
//# sourceMappingURL=utils.js.map