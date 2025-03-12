
import { FetchHttpClient, HttpClient } from "./HttpClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const httpClient: HttpClient = new FetchHttpClient();



export const verifyOTPRequest = async (phone: string, otp: string) => {
    return httpClient.post(`${API_URL}/auth/login-phone-otp`, { phone, otp });
}

