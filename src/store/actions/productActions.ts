// store/actions/productActions.ts
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../types/productTypes";

export const fetchProductsSuccess = (products: any[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFail = (error: string) => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: error,
});
