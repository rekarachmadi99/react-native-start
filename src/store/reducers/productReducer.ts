// store/reducers/productReducer.ts
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../types/productTypes";

interface ProductState {
  products: any[];
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  error: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, error: null };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
