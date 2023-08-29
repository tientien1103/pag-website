import * as Yup from "yup";

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegex, "Invalid email address"),
  name: Yup.string()
    .strict()
    .trim("Name is required")
    .required("Name is required"),
  phone: Yup.string()
    .strict()
    .trim("Phone is required")
    .required("Phone is required"),
});
