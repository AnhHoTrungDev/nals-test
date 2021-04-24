export const publicRoutes = {
  login: {
    page: "login",
    exact: true,
    path: "/login",
  },
  registration: {
    page: "registration",
    exact: true,
    path: "/registration",
  },
};

export const protectedRoutes = {
  users: {
    page: "users",
    exact: true,
    path: "/users",
  },
};
