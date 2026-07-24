import bcrypt from "bcrypt"
import { User } from "../models/User.js"
import jwt from "jsonwebtoken"
import { loginSchema, signupSchema } from "../validations/auth.validations.js"


export const registerUser = async (request, response) => {

    const { error, value } = signupSchema.validate(request.body)

    if (error) {
        response.status(400).json(error.details[0].message)
    }

    try {

        const { name, email, password } = value

        if (!name || !email || !password) {
            response.status(400).send({ message: "Please fill all the details" })
            return
        }

        const user = await User.findOne({ email })
        if (user) {
            response.status(400).send({ message: "Sorry a user already exist with this email" })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const data = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: hashedPassword,
        })

        response.status(200).json({ message: "SignUp Sucessfull", data })

    } catch (error) {
        console.error("Error Signup User", error)
    }
}

export const login = async (request, response) => {

    const { error, value } = loginSchema.validate(request.body)

    if (error) {
        response.status(400).json(error.details[0].message)
        return
    }

    try {

        const { email, password } = value

        if (!email || !password) {
            response.status(400).send({ message: "Please Fill all details" })
            return
        }

        const res = await User.findOne({ email })
        if (!res) {
            response.status(400).send({ message: "user not found" })
            return
        }

        const isMatch = await bcrypt.compare(password, res.password)
        if (!isMatch) {
            response.status(400).send({ message: "password does not match" })
            return
        }

        const token = jwt.sign(
            { id: res._id, email: res.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
        )

        response.status(200).json({ message: "Login sucessfull", res, token })

    } catch (error) {
        console.error("Login Failed", error)
    }
}


export const logout = async (request, response) => {
    try {

        response.status(200).json({ message: "User Logout sucessfully" })
    } catch (error) {
        console.error("error logging out user", error)
    }
}


export const getProfile = async (request, response) => {
    try {
        const user = await User.findById(request.user.id).select("-password")
        if (!user) {
            response.status(400).send({ message: "user not found" })
            return
        }
        response.status(200).json({ message: "get profile sucessfully", user })
    } catch (error) {
        console.error("get profile failed", error)
    }
}

export default { login, registerUser, logout, getProfile }