import { Message } from "../models/Message.js"

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
    const senderId = request.user?.id

    console.log(request.user)

    try {
        const data = await Message.create({
            text,
            senderId,
            receiverId
        })

        response.status(200).json({ message: "Message send sucessfully", data })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { getMessages, sendMessage }