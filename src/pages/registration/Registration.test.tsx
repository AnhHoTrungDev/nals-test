import { render, screen, waitFor } from "@testing-library/react";

import Registration from "./index";
import { BrowserRouter, Route } from "react-router-dom";

it("Registration page", async () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Registration />registration
      <Route path="/auth/login" />
    </BrowserRouter>
  );

  await waitFor(() => expect(screen.getByText("SIGN UP")).toBeInTheDocument());
  const btnSignIn = queryByTestId("btn-sign-up");
  expect(btnSignIn).toBeVisible();
});

it("display username password", async () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Registration />
      <Route path="/auth/registration" />
    </BrowserRouter>
  );

  await waitFor(() => screen.getByTestId("btn-sign-up"));
  const usernameInput = queryByTestId("username-input");
  const passwordInput = queryByTestId("password-input");
  expect(usernameInput).toBeVisible();
  expect(passwordInput).toBeVisible();
});
