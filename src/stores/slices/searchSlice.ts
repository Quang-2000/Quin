import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { axiosClient } from "../../api/axiosClient";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "searchSlice/fetchProducts",
  async ({ name }: any, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axiosClient.get(`/products?name_like=${name}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: any) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Có lỗi xảy ra";
    });
  },
});

export default searchSlice.reducer;
