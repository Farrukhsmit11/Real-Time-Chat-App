import { User } from "../models/User.js"

export const getUsers = async (request, response) => {
    try {
        const res = await User.find()
        response.status(200).json({ message: "users fetched sucessfully", res })
    } catch (error) {
        console.error("error fetching users", error)
    }
}

export default { getUsers }