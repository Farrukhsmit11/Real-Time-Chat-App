import * as Yup from "yup"

export const changePasswordSchema = Yup.object({
    newPassword: Yup.string().min(8, "Password must have atleast 8 characters")
        .matches(/[A-Z]/, "Password must contain atleast one upperCase letter")
        .matches([/a-z]/,], "Password must contain atleast one lowercase character")
        .matches(/[0-9]/, "Password must contain atleast one number")
        .matches(/[@#$%^&!*]/, "Password must contain atleast one special character")
        .required(),

    confirmPassword: Yup.string().min(8, "Password must have atleast 8 characters")
        .matches(/[A-Z]/, "Password must have atleast one uppercase characters")
        .matches(/[a-z]/, "Password must have atleast one lowercase characters")
        .matches(/[0-9]/, "Password must contain atleast one number")
        .matches(/[@#$%^&!*]/, "Password must contain atleast one special character")
        .required(),
})