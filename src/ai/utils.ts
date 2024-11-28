// scr/ai/utils.ts
import fs from 'fs';

/**
 * Validates the provided token.
 * @param token The token to validate.
 * @returns True if the token is valid, otherwise false.
 */
export function validateToken(token: string): boolean {
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
export function validateFilePath(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    console.error(`File validation failed. Path does not exist: ${filePath}`);
    throw new Error(`File not found: ${filePath}`);
  }

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch {
    console.error(`File validation failed. Path is not readable: ${filePath}`);
    throw new Error(`File not readable: ${filePath}`);
  }
}
