import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  products: [],
  valueSearch: "",
};
export const fetchProductsPage = createAsyncThunk(
  "productPageSlice/fetchProductsPage",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get("products");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchProductsPageName = createAsyncThunk(
  "productPageSlice/fetchProductsPageName",
  async ({ name }: any, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get(
        `/products?name_like=${name}`
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productPageSlice = createSlice({
  name: "productPageSlice",
  initialState: initialState,
  reducers: {
    getValueSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductsPage.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchProductsPage.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProductsPage.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const { getValueSearch } = productPageSlice.actions;
export default productPageSlice.reducer;
