import { createContext, Dispatch, Context } from "react";
import { IAuthState, AuthAction } from "./auth";

export interface IAuthContext {
  authState: IAuthState;
  dispatchAuthAction: Dispatch<AuthAction>;
}

const AuthContext = createContext<IAuthContext | null>(
  null
) as Context<IAuthContext>;

export default AuthContext;