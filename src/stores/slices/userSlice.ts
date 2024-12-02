import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

export const registerUserAsyncsssss = createAsyncThunk(
  "userSlice/registerUserAsyncsssss",
  async (value: any, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axiosClient.post("/users", value);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const loginUserAsync = createAsyncThunk(
//   "user/login",
//   async (
//     userData: { username: string; password: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       // const response = await loginUser(userData.username, userData.password);
//       return response;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const userSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    // Handle register
    builder
      .addCase(registerUserAsyncsssss.pending, (state) => {})
      .addCase(registerUserAsyncsssss.fulfilled, (state, action) => {})
      .addCase(registerUserAsyncsssss.rejected, (state, action) => {});

    // Handle login
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
