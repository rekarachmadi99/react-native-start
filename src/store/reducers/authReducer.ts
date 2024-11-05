// store/reducers/authReducer.ts
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types/authTypes";

interface AuthState {
  user: any | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
