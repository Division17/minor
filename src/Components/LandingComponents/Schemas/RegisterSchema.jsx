import * as Yup from "yup";
export const RegisterSchema = Yup.object({
      name: Yup.string()
      .required("Required")
      .min("4", "Must be at least 4 characters long")
      .matches(/^[a-zA-Z]+$/, "Name can only contain letters"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
      .required("Required")
      .min("6", "Must be at least 6 characters long")
      .matches(/^[a-zA-Z]+$/, "Password can only contain letters"),
  });
