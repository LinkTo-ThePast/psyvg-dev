import { ICVData, ICVResponse } from "@/utils/interfaces/user";
import { FetchHttpClient, HttpClient } from "./HttpClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const httpClient: HttpClient = new FetchHttpClient();

export const registerUser = async (userData: object) => {
  return httpClient.post(`${API_URL}/users/create-user`, userData);
};

export const loginUser = async (email: string, password: string) => {
  return httpClient.post(`${API_URL}/auth/login`, { email, password });
};

export const fetchUserById = async (userId: string) => {
  return httpClient.get(`${API_URL}/users/${userId}`);
};

export const updateUser = async (userId: string, userData: object) => {
  const filteredData = Object.fromEntries(
    Object.entries(userData).filter(([_, v]) => v !== undefined && v !== "")
  );
  return httpClient.put(`${API_URL}/users/update-user/${userId}`, filteredData);
};

export const updateProfile = async (userData: object) => {
  return httpClient.put(`${API_URL}/users/update-profile`, userData);

}

export const getInitialCV = async () => {
  return httpClient.get(`${API_URL}/users/initial-cv`);
}

export const uploadProfileImage = async (userId: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/users/update-user/${userId}/upload-photo`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const sendVerificationCodePhone = async (phone: string) => {
  return httpClient.get(`${API_URL}/users/send-phone-verification/${phone}`);
};

export const verifyCodePhone = async (phone: string, code: string) => {
  return httpClient.put(`${API_URL}/users/verify-phone`, { phone, otp: code });
};

export const getUserCV = async (userId: string): Promise<ICVResponse> => {
  const response = await fetch(`${API_URL}/users/${userId}/cv`);
  if (!response.ok) {
    throw new Error("Error al obtener el CV");
  }
  return response.json();
};

export const updateUserCV = async (userId: string, updatedCV: ICVData) => {
  return httpClient.put(`${API_URL}/users/${userId}/cv`, updatedCV);
};

export const getWorkExperience = async () => {
  return httpClient.get(`${API_URL}/work-experience`);
}

export const addWorkExperience = async (workExperienceData: object) => {
  return httpClient.post(`${API_URL}/work-experience/add`, workExperienceData);
}

export const updateWorkExperience = async (workExperienceId: string, workExperienceData: object) => {
  return httpClient.put(`${API_URL}/work-experience/${workExperienceId}`, workExperienceData);
}

export const deleteWorkExperience = async (workExperienceId: string) => {
  return httpClient.delete(`${API_URL}/work-experience/${workExperienceId}`);
}
