import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    username: null,
    userId: null,
    errorMessage: null,
    sucessMessage: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload.userName;
      state.userId = action.payload.userId;
    },

    logout(state) {
      // state = state;
      // state.isLoggedIn = false;
      // state.username = null;
      // state.userId = "";
      state.isLoggedIn = false;
      state.username = null;
      state.userId = null;
      state.errorMessage = null;
      state.successMessage = null;
    },

    setError(state, action) {
      state.errorMessage = action.payload;
    },

    setSuccess(state, action) {
      state.sucessMessage = action.payload;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
