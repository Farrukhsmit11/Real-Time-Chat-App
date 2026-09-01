import { Friend } from "../models/Friend.js"

export const getFriends = async (request, response) => {
    try {
        const data = await Friend.find().populate("friendId", "name email")
        response.status(200).json({ message: "Friends Fetched Sucessfully", data })
    } catch (error) {
        console.error("Error While Fetching Friends", error)
    }
}

export default { getFriends }