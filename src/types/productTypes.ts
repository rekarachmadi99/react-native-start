// types/productTypes.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  // Add more fields as necessary
}

export interface ProductState {
  products: Product[];
  error: string | null;
}
