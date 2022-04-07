import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "selectedTrack",
  initialState: {
    value: null,
  },
  reducers: {
    setSelectedTrack: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedTrack } = trackSlice.actions;
export const selectSelectedTrack = (state) => state.selectedTrack.value;
export default trackSlice.reducer;
