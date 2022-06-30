import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import Api from "../../api";
import { ILoginDto } from "../../dto/auth.dto";

interface IAuth {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const userApi = new Api();

export const userLogin = createAsyncThunk(
  'auth/login',
  async (payload: ILoginDto, { rejectWithValue }) => {
    try {
      const token = await userApi.login(payload);
      return token;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  },
);

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
  },
  extraReducers: builder => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    });

    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoggedIn = false;
      message.error(action.payload as string)
    });
  },
})

export default authSlice.reducer;

export const { logout } = authSlice.actions;