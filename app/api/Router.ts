export interface HTTPMethods {
  get<T>(URL: string): Promise<T>;
  post<T>(URL: string, body: object): Promise<T>;
  put<T>(URL: string, body: object): Promise<T>;
  delete<T>(URL: string): Promise<T>;
}

// working with generics

const sumTwoValues<T> = (num1: number, num2: number) => {
  return num1 + num2;
}

