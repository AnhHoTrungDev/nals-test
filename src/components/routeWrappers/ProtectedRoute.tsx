import React, { FC, useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import AuthContext from "src/context/auth/auth.context";
// import { restrictedRoutes } from 'src/config/router/routes'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const ProtectedRoute: FC<RouteProps> = ({ children, ...restProps }) => {
  const [authState] = useContext(AuthContext);

  console.log("authState?.isAuthenticated", authState);

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        authState?.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
