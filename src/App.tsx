import React, { Suspense, useReducer } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import {
  ProtectedRouteWrapper,
  PublicRouteWrapper,
} from "./components/route-wrappers";
import { protectedRoutes, publicRoutes } from "./config/router/routes";
import AuthContext from "./context/auth/auth.context";
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
    <AuthContext.Provider value={{ authState, dispatchAuthAction }}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
        >
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
            <Redirect to={publicRoutes.login.path} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
