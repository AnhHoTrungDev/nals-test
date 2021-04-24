import React, { Suspense, useReducer } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import {
  ProtectedRouteWrapper,
  PublicRouteWrapper,
} from "./components/routeWrappers";
import { protectedRoutes, publicRoutes } from "./config/router/routes";
import { AuthProvider } from "./context/auth/auth.context";
import { authReducer, initialAuthState } from "./context/auth/auth.reducer";

const lazyPages: Record<string, React.ComponentType<unknown>> = {};

Object.entries({ ...protectedRoutes, ...publicRoutes }).forEach(
  ([key, route]) => {
    lazyPages[key] = React.lazy(() => import(`src/pages/${route.page}`));
  }
);

const App: React.FC = () => {
  const [authState, dispatchAuthAction] = useReducer(
    authReducer,
    initialAuthState
  );

  return (
    <AuthProvider value={[authState, dispatchAuthAction]}>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Switch>
            {Object.entries(protectedRoutes).map(([key, route]) => {
              const ComponentLazy = lazyPages[key];
              return (
                <ProtectedRouteWrapper key={key} path={route.path}>
                  <ComponentLazy />
                </ProtectedRouteWrapper>
              );
            })}
            {Object.entries(publicRoutes).map(([key, route]) => {
              const ComponentLazy = lazyPages[key];
              return (
                <PublicRouteWrapper key={key} path={route.path}>
                  <ComponentLazy />
                </PublicRouteWrapper>
              );
            })}
            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
