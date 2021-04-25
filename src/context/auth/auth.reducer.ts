import { BASE_AUTHENTICATION } from "src/constant";
import { AuthAction, IAuthState } from "./auth";

const validateJWT = (): boolean => {
  const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
  return regex.test(localStorage.getItem(BASE_AUTHENTICATION) || "");
};

export const initialAuthState: IAuthState = {
  isAuthenticated: validateJWT(),
};

export const authReducer = (
  prevState: IAuthState,
  action: AuthAction
): IAuthState => {
  switch (action.type) {
    case "SWITCH_AUTH_STATE":
      return { ...prevState, isAuthenticated: action.payload.state };

    default:
      return prevState;
  }
};
