export interface HTTPMethods {
  get<T>(URL: string): Promise<T>;
  post<T>(URL: string, body: object): Promise<T>;
  put<T>(URL: string, body: object): Promise<T>;
  delete<T>(URL: string): Promise<T>;
}

// working with generics

interface IUserMock {
  id: string;
  name: string;
}

// using in some method

const user = client.get<IUserMock>("url where to call for resource!");
