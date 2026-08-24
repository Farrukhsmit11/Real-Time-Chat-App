import { FriendRequest } from "../models/FriendRequest.js"

export const getRequests = async (request, response) => {
    try {
        const data = await FriendRequest.find().populate("senderId", "name  email")
        response.status(200).json({ message: "Requests Fetched Sucessfully", data })
    } catch (error) {
        console.error("Error while Fetching Reqests", error)
    }
}

export const sendRequest = async (request, response) => {

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

export const approveRequest = async (request, response) => {

    const senderId = request.user.id
    const { requestId } = request.body

    try {
        const request = await FriendRequest.findById(requestId)
        if (!request) {
            response.status(400).send({ message: "No Request Found" })
            return
        }

        if (request.receiverId !== senderId) {
            response.status(400).json({ message: "Unauthorized" })
            return
        }

        request.status = "approved"
        await request.save()

        response.status(200).json({ message: "Request has been approved", request })
    } catch (error) {
        console.error("Error while approving request", error)
    }
}

export default { getRequests, sendRequest, approveRequest }