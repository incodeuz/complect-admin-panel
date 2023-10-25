import { configureStore } from "@reduxjs/toolkit";
import routerSlice from "./routerSlice";
import loaderSlice from "./loaderSlice";

const store = configureStore({
  reducer: {
    routes: routerSlice,
    loader: loaderSlice,
  },
});

export default store;
