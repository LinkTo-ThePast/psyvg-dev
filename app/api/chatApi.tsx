import { FetchHttpClient, HttpClient } from "./HttpClient";

const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;
const httpClient: HttpClient = new FetchHttpClient();

export const getChatResponse = async (body: string, from_phone: string) => {
    const response = await httpClient.post(`${API_URL}`, { body, from_phone, from_webapp: true });
    return response
}