import React, { FC, useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
// import { restrictedRoutes } from 'src/config/router/routes'
// import { AuthContext } from 'src/context'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const ProtectedRoute: FC<RouteProps> = ({ children, ...restProps }) => {
//   const { authState } = useContext(AuthContext)
  return (
    <div>
      <Route
        // {...restProps}
        // render={({ location }) =>
        //   authState.isAuthenticated ? (
        //     children
        //   ) : (
        //     <Redirect
        //       to={{
        //         pathname: restrictedRoutes.login.path,
        //         state: { from: location }
        //       }}
        //     />
        //   )
        // }
        {...restProps}
      />
    </div>
  )
}

export default ProtectedRoute
