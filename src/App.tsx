import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { ProtectedRouteWrapper ,PublicRouteWrapper} from "./components/routeWrappers";
import { protectedRoutes, publicRoutes } from "./config/router/routes";

const lazyPages: Record<string, React.ComponentType<unknown>> = {};
Object.entries({ ...protectedRoutes, ...publicRoutes }).forEach(
  ([key, route]) => {
    lazyPages[key] = React.lazy(() => import(`src/pages/${route.page}`));
  }
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"loading..."}>
        <Switch>
          {Object.entries(protectedRoutes).map(([key, route]) => {
            const C = lazyPages[key];
            return (
              <ProtectedRouteWrapper key={key} path={route.path}>
                <C />
              </ProtectedRouteWrapper>
            );
          })}
          {Object.entries(publicRoutes).map(([key, route]) => {
            const C = lazyPages[key];
            return (
              <PublicRouteWrapper key={key} path={route.path}>
                <C />
              </PublicRouteWrapper>
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
