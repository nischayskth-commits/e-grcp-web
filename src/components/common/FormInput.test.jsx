import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";

describe("FormInput", () => {
  const register = () => ({});
  const errors = {};

  test("renders input with label", () => {
    render(
      <FormInput
        label="Email"
        name="email"
        register={register}
        errors={errors}
      />
    );

    expect(
      screen.getByLabelText("Email")
    ).toBeInTheDocument();
  });

  test("renders text input by default", () => {
    render(
      <FormInput
        label="Email"
        name="email"
        register={register}
        errors={errors}
      />
    );

    expect(
      screen.getByLabelText("Email")
    ).toHaveAttribute("type", "text");
  });

  test("renders custom input type", () => {
    render(
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        errors={errors}
      />
    );

    expect(
      screen.getByLabelText("Email")
    ).toHaveAttribute("type", "email");
  });

  test("shows validation error", () => {
    render(
      <FormInput
        label="Email"
        name="email"
        register={register}
        errors={{
          email: {
            message: "Email is required",
          },
        }}
      />
    );

    expect(
      screen.getByText("Email is required")
    ).toBeInTheDocument();
  });

  test("accepts additional props", () => {
    render(
      <FormInput
        label="Email"
        name="email"
        register={register}
        errors={errors}
        placeholder="Enter Email"
      />
    );

    expect(
      screen.getByPlaceholderText("Enter Email")
    ).toBeInTheDocument();
  });
});