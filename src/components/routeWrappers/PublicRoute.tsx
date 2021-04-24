import React, { FC } from "react";
import { Route, RouteProps } from "react-router";

const PublicRoute: FC<RouteProps> = ({ children, ...restProps }) => {
  console.log("run",children);

  return <Route {...restProps} render={() => children} />;
};

export default PublicRoute;
