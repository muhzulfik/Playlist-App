import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    value: localStorage.getItem("authorization")
      ? localStorage.getItem("authorization")
      : "",
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("authorization", action.payload);
    },
  },
});

export const { setAccessToken } = authorizationSlice.actions;

export const selectAccessToken = (state: RootState) =>
  state.authorization.value;

export default authorizationSlice.reducer;
