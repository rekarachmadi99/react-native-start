// services/userService.ts
import api from "./api";

const userService = {
  getUserProfile: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
  updateUserProfile: async (userId: string, data: any) => {
    const response = await api.put(`/users/${userId}`, data);
    return response.data;
  },
  // Add more user-related methods as needed
};

export default userService;
