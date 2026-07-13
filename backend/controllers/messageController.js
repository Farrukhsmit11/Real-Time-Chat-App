import { Message } from "../models/Message.js"
import pusher from "../config/pusher.js"

export const getMessages = async (req, res) => {
    try {
        const data = await Message.find()

        res.status(200).json({ message: "messages fetch sucessfully", data })

    } catch (error) {
        console.error("error fetching message")
    }
}

export const sendMessage = async (request, response) => {

    const { text, receiverId } = request.body
    const senderId = request.user?._id

    try {

        if (!text || !receiverId) {
            response.status(400).send({ message: "Please enter message" })
            return
        }

        if (!senderId) {
            response.status(400).send({ message: "User not authenticated" })
            return
        }
        const data = await Message.create({
            text,
            receiverId,
            senderId,
        })

        await pusher.trigger("chat-app", "new-message", {
            data
        })

        response.status(200).json({ message: "Message send sucessfully", data })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { getMessages, sendMessage }