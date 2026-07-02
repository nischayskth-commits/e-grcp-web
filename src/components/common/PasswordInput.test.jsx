import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  const register = () => ({});
  const errors = {};

  test("renders password input", () => {
    render(
      <PasswordInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
      />
    );

    expect(
      screen.getByLabelText("Password")
    ).toBeInTheDocument();
  });

  test("password is hidden by default", () => {
    render(
      <PasswordInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
      />
    );

    expect(
      screen.getByLabelText("Password")
    ).toHaveAttribute("type", "password");
  });

  test("toggles password visibility", () => {
    render(
      <PasswordInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
      />
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(
      screen.getByLabelText("Password")
    ).toHaveAttribute("type", "text");

    fireEvent.click(button);

    expect(
      screen.getByLabelText("Password")
    ).toHaveAttribute("type", "password");
  });

  test("shows validation error", () => {
    render(
      <PasswordInput
        label="Password"
        name="password"
        register={register}
        errors={{
          password: {
            message: "Password is required",
          },
        }}
      />
    );

    expect(
      screen.getByText("Password is required")
    ).toBeInTheDocument();
  });
});