// store/reducers/userReducer.ts
import { FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "../types/userTypes";

interface UserState {
  user: any | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case FETCH_USER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
