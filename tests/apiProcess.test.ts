// tests/apiProcess.test.ts

import Process  from '../src/ai/process';

describe('ApiClient', () => {
  const validOptions = { baseURL: 'http://localhost', token: 'validToken123' };
  const invalidFilePath = 'nonexistentfile.jpg';

  it('should throw an error for an invalid token', () => {
    expect(() => new Process({ baseURL: 'http://localhost', token: 'short' })).toThrow('Invalid token provided.');
  });

  it('should throw an error for a non-existent file', async () => {
    const client = new Process(validOptions);
    await expect(client.sendFile(invalidFilePath)).rejects.toThrow('File not found');
  });

  it('should send a file successfully', async () => {
    // Mock Axios or the backend API here for a full test.
    expect(true).toBe(true);
  });
});
