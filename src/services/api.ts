// services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Your API base URL
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for request/response handling
api.interceptors.request.use(
  (config) => {
    // Add any custom headers or token handling here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
