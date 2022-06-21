import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "src/slices/profile";
// ...
const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
