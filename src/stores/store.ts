import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../stores/slices/counter.slice";
import productPageReducer from "./slices/productsPageSlice";
import productListReducer from "./slices/productsListSlice";
import searchReducer from "./slices/searchSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    couterState: counterReducer,
    productsPageSlice: productPageReducer,
    productsListSlice: productListReducer,
    searchSlice: searchReducer,
    cartSlice: cartReducer,
    userSlice: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
