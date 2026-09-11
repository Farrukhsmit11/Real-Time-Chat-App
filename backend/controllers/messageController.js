import { Session } from "../models/Session.js"

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

        response.status(200).json({ message: "Session founded sucessfully", data: session.messages })

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
        } else {
            await Session.create({
                senderId,
                receiverId,
                messages: [newMessage],
            })
        }
        response.status(200).json({ message: "Message send sucessfully" })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { sendMessage, getMessages }