import { createContext, Context, Dispatch } from "react";
import { IAuthState, AuthAction } from "./auth";

export interface IAuthContext {
  authState?: IAuthState;
  dispatchAuthAction?: Dispatch<AuthAction>;
}

const AuthContext: Context<any> = createContext({});

export const AuthProvider = AuthContext.Provider;
export default AuthContext;
