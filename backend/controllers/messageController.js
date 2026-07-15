import { Message } from "../models/Message.js"
import pusher from "../config/pusher.js"
import { request } from "express"

export const getMessages = async (request, response) => {

    const senderId = request.user?._id
    const receiverId = request.params.receiverId

    try {

        //    Is line ka matlab ha messages find kro using filter . 
        //    pheli condition ka matlab woh messages dekhao jo logged in user aur selected user ke beeche mai message hue hain 
        // 2nd condition
        // woh messages dekhao jo selected user ne logged in user ko message kia ha woh dekhao
        const data = await Message.find({
            $or: [
                {
                    senderId: request.user?.id,
                    receiverId: request.params.id
                },

                {
                    senderId: request.params.id,
                    receiverId: request.user?.id
                }
            ]
        })

        response.status(200).json({ message: "messages fetch sucessfully", data })

    } catch (error) {
        console.error("error fetching message", error)
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

        const result = await pusher.trigger("chat-app", "new-message", {
            data
        })

        response.status(200).json({ message: "Message send sucessfully", data })

    } catch (error) {
        console.error("error sending message", error)
    }
}

export default { getMessages, sendMessage }