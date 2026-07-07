import Joi from "joi"

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d) (?=.*[@#$%^&*]).{8,}$/)
})