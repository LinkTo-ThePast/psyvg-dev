export interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, body: object): Promise<T>;
  put<T>(url: string, body: object): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export class FetchHttpClient implements HttpClient {
  private async request<T>(url: string, options: RequestInit): Promise<T> {
    try {
      // Construct API request via backend proxy
      const response = await fetch("/api/proxy", {
        ...options,
        method: "POST",
        credentials: "include", // Ensure cookies are sent
        headers: {
          ...options.headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: options.method, // Forwarding original method
          url, // Target API URL
          content: options.body ? JSON.parse(options.body as string) : null,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async get<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: "GET" });
  }

  async post<T>(url: string, body: object): Promise<T> {
    return this.request<T>(url, { method: "POST", body: JSON.stringify(body) });
  }

  async put<T>(url: string, body: object): Promise<T> {
    return this.request<T>(url, { method: "PUT", body: JSON.stringify(body) });
  }

  async delete<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: "DELETE" });
  }
}
