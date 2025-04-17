import { configureStore } from "@reduxjs/toolkit";
import provinceReducer from "./ProvinceSlice";

export const Store = configureStore({
  reducer: {
    province: provinceReducer,
  },
});
