import React, { FC, useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import AuthContext from "src/context/auth/auth.context";
import Layout from "src/layout/Layout";

const ProtectedRoute: FC<RouteProps> = ({ children, ...restProps }) => {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...restProps}
      render={({ location }) =>
        authState?.isAuthenticated ? (
          <Layout> {children}</Layout>
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
