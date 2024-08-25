// authReducer.ts
import {
  AuthActionTypes,
  SET_CREDENTIALS,
  LOGOUT,
  LOAD_STORED_STATE,
} from "../actions";

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

const authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case SET_CREDENTIALS:
      const { user, accessToken, refreshToken } = action.payload;

      // שמירת המצב ב-localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user,
          accessToken,
          refreshToken,
        })
      );

      return {
        ...state,
        isAuthenticated: true,
        user,
        accessToken,
        refreshToken,
      };

    case LOGOUT:
      // הסרת המצב מה-localStorage
      localStorage.removeItem("auth");

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
        refreshToken: null,
      };

    case LOAD_STORED_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
