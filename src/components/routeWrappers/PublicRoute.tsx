import React, { FC, useContext } from "react";
import { Route, RouteProps } from "react-router";
import { Redirect } from "react-router-dom";
import AuthContext from "src/context/auth/auth.context";

const PublicRoute: FC<RouteProps> = ({ children, ...restProps }) => {
  const [authState] = useContext(AuthContext);

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        !authState?.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/users",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PublicRoute;
