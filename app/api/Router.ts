export interface HTTPMethods {
  get<T>(URL: string): Promise<T>;
  post<T>(URL: string, body: object): Promise<T>;
  put<T>(URL: string, body: object): Promise<T>;
  delete<T>(URL: string): Promise<T>;
}
