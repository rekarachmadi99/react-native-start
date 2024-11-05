// config/apiConfig.ts
const API_BASE_URL = "https://api.example.com";
const API_TIMEOUT = 5000; // in milliseconds

const apiEndpoints = {
  login: `${API_BASE_URL}/auth/login`,
  fetchUsers: `${API_BASE_URL}/users`,
  fetchProducts: `${API_BASE_URL}/products`,
  // Add more endpoints as needed
};

export { API_BASE_URL, API_TIMEOUT, apiEndpoints };
