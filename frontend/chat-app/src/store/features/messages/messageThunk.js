import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { post } from "../../../utils/apiMethod"

const BASE_URL = "http://localhost:5000"

export const handleSendMessage = createAsyncThunk(
    "send-message",
    async (senderId, receiverId) => {
        try {
            const data = await post(`${BASE_URL}/send-message`, {
                senderId,
                receiverId
            })
        } catch (error) {
            console.error("error sending message")
        }
    }
)


// const handleSendMessage = async () => {
//     try {
//         const data = await axios.post(`${BASE_URL}/send-message`, {
//             text,
//             receiverId
//         },
//             { withCredentials: true }
//         );
//         const newMessage = data?.data.data
//         console.log(data.data)
//         setMessages((prev) => [...prev, newMessage])
//         handleMessages()
//         setText("")
//         message.success("Message send sucessfully")
//     } catch (error) {
//         if (error.response) {
//             message.error(error.response.data.message)
//         }
//         console.error("error", error)
//     }
// }