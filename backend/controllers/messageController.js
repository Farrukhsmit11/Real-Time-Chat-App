import { Session } from "../models/Session.js"
import { Friend } from "../models/Friend.js"

export const getMessages = async (request, response) => {

    try {

        const { sessionId } = request.params

        if (!sessionId) {
            response.status(400).send({ message: "Session Id is required" })
            return
        }

        const session = await Session.findById(sessionId)

        if (!session) {
            response.status(400).send({ message: "Session not found" })
            return
        }

        response.status(200).json({
            message: "Session founded sucessfully", data: session.messages
        })

    } catch (error) {
        console.error("Failed to Fetch Messages", error)
    }
}


export const sendMessage = async (request, response) => {

    const senderId = request.user.id
    const { text, receiverId } = request.body

    try {

        if (!text || !receiverId) {
            response.status(400).send({ message: "Please enter message" })
            return
        }

        if (!senderId || !receiverId) {
            response.status(400).send({ message: "senderId and receiverId required" })
            return
        }

        if (!senderId) {
            response.status(400).send({ message: "User not authenticated" })
            return
        }

        const newMessage = {
            senderId,
            receiverId,
            text
        }

        let session

        const existingSession = await Session.findOne({
            $or: [
                {
                    "messages.senderId": senderId,
                    "messages.receiverId": receiverId
                },

                {
                    "messages.senderId": receiverId,
                    "messages.receiverId": senderId
                }
            ]
        })

        if (existingSession) {
            existingSession.messages.push(newMessage)
            await existingSession.save()

            session = existingSession

        } else {
            session = await Session.create({
                senderId,
                receiverId,
                messages: [newMessage],
            })
        }

        const friend = await Friend.findOne({
            userId: senderId,
            friendId: receiverId,
        })
        if (friend) {
            friend.sessionId = session._id
            await friend.save()
        }

        response.status(200).json({ message: "Message send sucessfully" })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { sendMessage, getMessages }