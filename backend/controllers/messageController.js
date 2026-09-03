import { Session } from "../models/Session.js"

export const getMessages = async (request, response) => {

    try {
        const senderId = request.user.id
        const receiverId = request.params.receiverId

        const message = await Session.findOne({
            $or: [
                {
                    senderId: senderId,
                    receiverId: receiverId
                },

                {
                    senderId: receiverId,
                    receiverId: senderId
                }
            ]
        })

        response.status(200).json({ message: "messages fetch properly", data: message })

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

        const existingSession = await Session.findOne({
            $or: [
                { senderId, receiverId },
                { receiverId, senderId }
            ]
        })

        if (existingSession) {
            response.status(400).send({ message: "Session already exists" })
            return
        }

        if (!existingSession) {
            const newSession = await Session.create({
                updatedAt: Date.now(),
                messages: [{ senderId, receiverId, text }],
            })

        }

        response.status(200).json({ message: "Message send sucessfully" })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { sendMessage, getMessages }