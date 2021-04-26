import { render, screen, waitFor } from "@testing-library/react";

import Login from "./index";
import App from "../../App";

it("login page", async () => {
  const { queryByTestId } = render(
    <App>
      <Login />
    </App>
  );

  await waitFor(() => expect(screen.getByText("SIGN IN")).toBeInTheDocument());
  const btnSignIn = queryByTestId("btn-sign-in");
  expect(btnSignIn).toBeVisible();
});

it("display username password", async () => {
  const { getByTestId, queryByTestId } = render(
    <App>
      <Login />
    </App>
  );

  await waitFor(() => getByTestId("btn-sign-in"));
  const usernameInput = queryByTestId("username-input");
  const passwordInput = queryByTestId("password-input");
  expect(usernameInput).toBeVisible();
  expect(passwordInput).toBeVisible();
});
