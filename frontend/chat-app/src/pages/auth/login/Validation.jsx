import * as Yup from "yup"

export const loginSchema = Yup.object({
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string().min(8, "Password must have atleast 8 characters")
        .matches(/[A-Z]/, "Password must have one uppercase Letter")
        .matches(/[a-z]/, "Password must have atleast one lowercase letter")
        .matches(/[0-9]/, "Password must have atleast one number")
        .matches(/[@#$%^&*]/, "Password must have atleast one special character")
})