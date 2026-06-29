import bcrypt from "bcrypt"
import { User } from "../models/User.js"
import jwt from "jsonwebtoken"

export const getUsers = async (request, response) => {
    try {
        const res = await User.find();

    } catch (error) {
        console.error("error", error)
    }
}

export const login = async (request, response) => {
    const { email, password } = request.body
    try {
        if (!request.body.email || !request.body.password) {
            response.status(400).send({ message: "Please Fill all details" })
            return
        }

        const res = await User.findOne({ email })
        if (!res) {
            response.status(400).send({ message: "user not found" })
            return
        }

        const isMatch = await bcrypt.compare(request.body.password, res.password)
        if (!isMatch) {
            response.status(400).send({ message: "email and password does not match" })
            return
        }

        const token = jwt.sign(
            { id: res._id, role: res.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        )

        response.status(200).json({ message: "Login sucessfull", res, token })

    } catch (error) {
        console.error("Login Failed", error)
    }
}

export default { getUsers, login }