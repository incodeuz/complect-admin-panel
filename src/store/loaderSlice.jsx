import { createSlice } from "@reduxjs/toolkit";
import router from "../router";

const routerSlice = createSlice({
  initialState: {
    isLoading: false,
  },
  name: "loaderSlice",
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, endLoading } = routerSlice.actions;
export default routerSlice.reducer;
