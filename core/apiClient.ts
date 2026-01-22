import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async get(endpoint: string) {
    const response = await this.request.get(endpoint);
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async post(endpoint: string, data: any) {
    const response = await this.request.post(endpoint, { data });
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async delete(endpoint: string) {
    const response = await this.request.delete(endpoint);
    expect(response.ok()).toBeTruthy();
    return response;
  }
}
