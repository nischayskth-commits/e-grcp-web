import * as yup from "yup";

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email address is required."),
});

export default forgotPasswordSchema;