import { FriendRequest } from "../models/FriendRequest.js"

export const getRequests = async (request, response) => {
    try {
        const data = await FriendRequest.find({
            receiverId: request.user.id,
            status: "pending"
            .populate("senderId")
        })
        response.status(200).json({ data })
    } catch (error) {
        console.error("Error while Fetching Reqests")
    }
}

export const sendFriendRequest = async (request, response) => {

    const senderId = request.user.id
    const { receiverId } = request.body

    try {

        if (!senderId || !receiverId) {
            response.status(400).send({ message: "senderId and receiverId required" })
            return
        }

        if (senderId === receiverId) {
            response.status(400).send({ message: "You cannot add yourself" })
            return
        }

        const existingRequest = await FriendRequest.findOne({
            $or: [
                { senderId: senderId, receiverId: receiverId },
                { senderId: receiverId, receiverId: senderId }
            ]
        })

        if (existingRequest) {
            response.status(400).send({ message: "Request has been already sent" })
            return
        }


        const data = await FriendRequest.create({
            senderId: senderId,
            receiverId: receiverId,
            status: "pending"
        })

        response.status(200).json({ message: "Send Request Sucessfull", data })

    } catch (error) {
        console.error("Something Went Wrong", error)
    }
}

export default { getRequests, sendFriendRequest }