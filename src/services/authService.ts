// services/authService.ts
import api from "./api";

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

const authService = {
  login: async (payload: LoginPayload) => {
    const response = await api.post("/auth/login", payload);
    return response.data;
  },
  register: async (payload: RegisterPayload) => {
    const response = await api.post("/auth/register", payload);
    return response.data;
  },
  // Add more authentication-related methods as needed
};

export default authService;
