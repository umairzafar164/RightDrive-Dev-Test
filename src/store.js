import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: dataReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
