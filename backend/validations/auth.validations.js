import Joi from "joi"

export const signupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*]).{8,}$/)
})

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*]).{8,}$/)
})

export const changePasswordSchema = Joi.object({
    email: Joi.string().required(),
    newPassword: Joi.string()
        .min(8)
        .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/)
        .required()
})

export const forgotPasswordSchema = Joi.object({
    email: Joi.string().required()
})

export const otpVerificationSchema = Joi.object({
    otp: Joi.string().required()
})