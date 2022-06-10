import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    isLoading: false
  } as IAuth,
  reducers: {
    logout: (state: IAuth) => {
      state.token = null;
      state.isLoggedIn = false
    },
  }
})

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export interface IAuth {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
}