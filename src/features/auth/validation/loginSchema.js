import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email address is required."),

  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Must contain at least one number."),

  rememberMe: yup.boolean(),
});

export default loginSchema;