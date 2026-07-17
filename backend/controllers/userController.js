import { User } from "../models/User.js"

export const getUsers = async (request, response) => {
    try {
        const res = await User.find()
        response.status(200).json({ message: "users fetched sucessfully", res })
    } catch (error) {
        console.error("error fetching users", error)
    }
}

export const searchUsers = async (request, response) => {
    try {
        const { query } = request.query

        if (!query) {
            response.status(400).send({ message: "query missing" })
            return
        }

        const data = await User.find({
            name: { $regex: query, $options: "i" },
        }).sort({ createdAt: -1 }).select("-password")

        if (data.length === 0) {
            response.status(400).send({ message: "No results found" })
            return
        }

        response.status(200).json({ message: "User search sucessfully", data })
    } catch (error) {
        console.error("Failed to search users", error)
    }

}

export default { getUsers, searchUsers }