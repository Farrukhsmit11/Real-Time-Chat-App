import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must have atleast 8 characters")
        .matches(/[A-Z]/, "Password must have atleast on uppercase letter")
        .matches(/[a-z]/, "Password must have atleast one lowercase letter")
        .matches(/[0-9]/, "Password must contain one digit")
        .matches(/[@#$%^&!*]/, "Password must have atleast one special characters")
        .required("Password is required")
})