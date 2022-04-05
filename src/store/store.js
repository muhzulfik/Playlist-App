import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import selectedTrackReducer from "./selectedTrackSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    selectedTrack: selectedTrackReducer,
  },
});
