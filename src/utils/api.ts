// utils/api.ts
import axios from "axios";
const API_BASE_URL = "https://your-api-url.com/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic function for handling API errors
const handleApiError = (error: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error("API Error:", error.response.data);
    throw new Error(error.response.data.message || "An unknown error occurred");
  } else if (error.request) {
    // The request was made but no response was received
    console.error("API No Response:", error.request);
    throw new Error("No response from the server");
  } else {
    // Something happened in setting up the request that triggered an error
    console.error("API Error:", error.message);
    throw new Error("Request setup error");
  }
};

export const getRequest = async (endpoint: string) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const postRequest = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const putRequest = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const deleteRequest = async (endpoint: string) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Optionally, add headers for specific requests
export const customRequest = async (
  method: "get" | "post" | "put" | "delete",
  endpoint: string,
  data?: any,
  headers?: any
) => {
  try {
    const response = await apiClient.request({
      method,
      url: endpoint,
      data,
      headers: {
        ...apiClient.defaults.headers,
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
