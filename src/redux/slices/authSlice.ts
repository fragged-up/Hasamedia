// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  // הוסף שדות נוספים לפי הצורך
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        accessToken: string;
        refreshToken: string | null;
      }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    loadStoredState: (state) => {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        const loadedState = JSON.parse(storedAuth) as AuthState;
        state.isAuthenticated = loadedState.isAuthenticated;
        state.user = loadedState.user;
        state.accessToken = loadedState.accessToken;
        state.refreshToken = loadedState.refreshToken;
      }
    },
  },
});

export const { setCredentials, logout, loadStoredState } = authSlice.actions;
export default authSlice.reducer;
