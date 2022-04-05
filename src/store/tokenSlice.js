import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeToken: () => {
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export const selectToken = (state) => state.token.value;
export default tokenSlice.reducer;
