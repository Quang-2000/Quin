import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState: any = {
  products: [],
  idCategory: 0,
};
export const fetchProductsList = createAsyncThunk(
  "productListSlice/fetchProductsList",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get("categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchProductCategory = createAsyncThunk(
  "productListSlice/fetchProductCategory",
  async (id: number, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get(`products?categoryId=${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productListSlice = createSlice({
  name: "productListSlice",
  initialState: initialState,
  reducers: {
    getIdCategorys: (state, action) => {
      state.idCategory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductsList.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProductsList.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const { getIdCategorys } = productListSlice.actions;
export default productListSlice.reducer;
