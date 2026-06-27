import bcrypt from "bcrypt"
import { User } from "../models/User.js"


export const getUsers = async (request, response) => {
    try {
        const res = await User.find();

    } catch (error) {
        console.error("error", error)
    }
}

export const signupUser = async (request, response) => {

    try {

        const { name, email, password } = request.body

        if (!request.body.name || !request.body.email || !request.body.password) {
            response.status(400).send({ message: "Fill all the details" })
            return
        }

        const user = await User.findOne({ email })
        if (user) {
            response.status(400).send({ message: "user exists" })
            return
        }

        const encryptedPassword = await bcrypt.hash(request.body.password, 10)

        const data = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: encryptedPassword
        })

        response.status(200).json({ message: "Signup cuessfully", data })

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
        }

        response.status(200).json({ message: "Login sucessfull", res })

    } catch (error) {
        console.error("Login Failed", error)
    }
}

export default { signupUser, getUsers, login }