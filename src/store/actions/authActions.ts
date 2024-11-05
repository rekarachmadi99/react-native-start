// store/actions/authActions.ts
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types/authTypes";

export const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error: string) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
