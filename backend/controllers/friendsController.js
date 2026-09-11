import { Friend } from "../models/Friend.js"

export const getFriends = async (request, response) => {
    try {
        const data = await Friend.find().populate("friendId", "name email sessionId")
        response.status(200).json({ message: "Friends Fetched Sucessfully", data })
    } catch (error) {
        console.error("Error While Fetching Friends", error)
    }
}

export const searchFriends = async (request, response) => {
    try {
        const { query } = request.query

        if (!query) {
            response.status(400).send({ message: "query is required" })
            return
        }

        const friends = await Friend.find({
            name: { $regex: query, $options: "i" }
        }).sort({ createdAt: -1 })

        response.status(200).json({ message: "Search Friends Sucessflly", friends })

    } catch (error) {
        console.error("error while searching friends", error)
    }
}

export default { getFriends, searchFriends }