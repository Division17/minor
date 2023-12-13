import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter the password"),
});
