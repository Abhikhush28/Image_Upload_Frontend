import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user.api";

const store = configureStore({reducer: {
 [userApi.reducerPath]: userApi.reducer

}, middleware:(mid)=>[...mid()]});

export default store;