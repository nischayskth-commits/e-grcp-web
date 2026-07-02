import * as yup from "yup";

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required("New password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Must contain at least one number."),

  confirmPassword: yup
    .string()
    .required("Confirm password is required.")
    .oneOf([yup.ref("password")], "Passwords do not match."),
});

export default resetPasswordSchema;