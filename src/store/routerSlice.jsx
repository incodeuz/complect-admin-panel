import { createSlice } from "@reduxjs/toolkit";
import router from "../router";

const routerSlice = createSlice({
  initialState: {
    routes: router?.routes,
    hello: "hello bro",
  },
  name: "routerSlice",
});

// export const { getRoutes } = routerSlice.actions;
export default routerSlice.reducer;
