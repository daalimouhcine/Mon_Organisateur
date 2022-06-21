import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  user: any;
  isAuthed: boolean;
}

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: {},
    isAuthed: false,
  } as ProfileState,
  reducers: {
    setUser: (state: ProfileState, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuthed = true;
    },
    setIsAuthed: (state: ProfileState, action: PayloadAction<any>) => {},
    logOut: (state: ProfileState) => {
      state.user = {};
      state.isAuthed = false;
    },
  },
});
export const { setIsAuthed, setUser, logOut } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
