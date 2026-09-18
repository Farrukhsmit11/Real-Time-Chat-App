import * as Yup from "yup"

export const otpVerificationSchema = Yup.object({
    otp: Yup.string()
        .length(6, "OTP must contain exactly 6 digits")
        .matches(/[0-9]/, "OTP must contain only numbers")
        .required("OTP is required")
})