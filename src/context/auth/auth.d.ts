export interface IAuthState {
  isAuthenticated: boolean;
}
export type AuthAction = {
  type: "SWITCH_AUTH_STATE";
  payload: {
    state: boolean;
  };
};