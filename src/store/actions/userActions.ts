// store/actions/userActions.ts
import { FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "../types/userTypes";

export const fetchUserSuccess = (user: any) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFail = (error: string) => ({
  type: FETCH_USER_FAIL,
  payload: error,
});
