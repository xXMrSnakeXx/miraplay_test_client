import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",

  initialState: { user: {}, token: null },

  reducers: {
    setUser(state, { payload }) {
      state.user = payload.user;
      if (payload.token) {
        state.token = payload.token;
      }
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logoutUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
