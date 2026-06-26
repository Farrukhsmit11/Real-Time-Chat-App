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

export default { signupUser, getUsers }