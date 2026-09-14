import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, post } from "../../../utils/apiMethod"

export const handleSendMessage = createAsyncThunk(
    "send-message",
    async ({ receiverId, text }) => {
        try {
            const data = await post("/send-message", {
                text,
                receiverId
            })
            return data.data.data
        } catch (error) {
            console.error("error sending message")
        }
    }
)

export const handleMessages = createAsyncThunk(
    "messages/getMessages",
    async (sessionId) => {
        try {
            const messages = await get(`/get-messages/${sessionId}`)

            return messages.data.data
        } catch (error) {
            console.error("error while fetching messages", error)
        }
    }
)