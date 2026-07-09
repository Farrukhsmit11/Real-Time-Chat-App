import { Message } from "../models/Message.js"

export const getMessages = async (req, res) => {
    try {
        const data = await Message.find()

        res.status(200).json({ message: "messages fetch sucessfully", data })

    } catch (error) {
        console.error("error fetching message")
    }
}

export const sendMessage = (request, response) => {
    
}


export default {  getMessages , sendMessage }