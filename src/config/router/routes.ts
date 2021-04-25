interface IRoute {
  page: string;
  exact?: boolean;
  path: string;
}

export const publicRoutes: Readonly<Record<string, IRoute>> = {
  login: {
    page: "login",
    exact: true,
    path: "/auth/login",
  },
  registration: {
    page: "registration",
    exact: true,
    path: "/auth/registration",
  },
};

export const protectedRoutes: Readonly<Record<string, IRoute>> = {
  users: {
    page: "users",
    exact: true,
    path: "/users",
  },
};
