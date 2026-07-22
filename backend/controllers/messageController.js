import { Message } from "../models/Message.js"
import { request } from "express"

export const getMessages = async (request, response) => {
    try {

        const senderId = request.user._id
        const receiverId = request.params.receiverId

        const message = await Message.find({
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

        response.status(200).json({ message: "Message send sucessfully", data })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { sendMessage, getMessages }