import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
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
        user: any;
        accessToken: string;
        refreshToken: string | null;
      }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      // Persist state to localStorage
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      // Remove from localStorage
      localStorage.removeItem("auth");
    },
    loadStoredState: (state) => {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        const loadedState = JSON.parse(storedAuth);
        state.isAuthenticated = loadedState.isAuthenticated;
        state.user = loadedState.user;
        state.accessToken = loadedState.accessToken;
        state.refreshToken = loadedState.refreshToken;
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
