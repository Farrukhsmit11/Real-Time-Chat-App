import { Friend } from "../models/Friend.js"
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

        const res = await FriendRequest.findById(requestId)

        if (!res) {
            response.status(400).send({ message: "No Request Found" })
            return
        }

        res.status = "approved"
        await res.save()

        await Friend.create({
            userId: senderId,
            friendId: res.senderId,
            addedOn: new Date()
        })

        response.status(200).json({ message: "Request has been approved" })
    } catch (error) {
        console.error("Error while approving request", error)
    }
}


export const rejectRequest = async (request, response) => {

    const { requestId } = request.body

    try {

        const friendRequest = await FriendRequest.findById(requestId)

        if (!friendRequest) {
            response.status(400).send({ message: "No Request Found" })
            return
        }

        friendRequest.status = "rejected"
        await friendRequest.save()

        response.status(200).json({ message: "Request has been rejected", data: friendRequest })

    } catch (error) {
        console.error("error while rejecting", error)
    }
}

export default { getRequests, sendRequest, approveRequest, rejectRequest }