// actions.ts
export const SET_CREDENTIALS = "SET_CREDENTIALS";
export const LOGOUT = "LOGOUT";
export const LOAD_STORED_STATE = "LOAD_STORED_STATE";

interface SetCredentialsAction {
  type: typeof SET_CREDENTIALS;
  payload: {
    user: any;
    accessToken: string;
    refreshToken: string | null;
  };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LoadStoredStateAction {
  type: typeof LOAD_STORED_STATE;
  payload: {
    isAuthenticated: boolean;
    user: any;
    accessToken: string | null;
    refreshToken: string | null;
  };
}

export type AuthActionTypes =
  | SetCredentialsAction
  | LogoutAction
  | LoadStoredStateAction;

export const setCredentials = (
  user: any,
  accessToken: string,
  refreshToken: string | null
): SetCredentialsAction => ({
  type: SET_CREDENTIALS,
  payload: { user, accessToken, refreshToken },
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const loadStoredState = (
  isAuthenticated: boolean,
  user: any,
  accessToken: string | null,
  refreshToken: string | null
): LoadStoredStateAction => ({
  type: LOAD_STORED_STATE,
  payload: { isAuthenticated, user, accessToken, refreshToken },
});
