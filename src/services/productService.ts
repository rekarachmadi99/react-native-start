// services/productService.ts
import api from "./api";

const productService = {
  getProducts: async () => {
    const response = await api.get("/products");
    return response.data;
  },
  getProductDetails: async (productId: string) => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  },
  // Add more product-related methods as needed
};

export default productService;
