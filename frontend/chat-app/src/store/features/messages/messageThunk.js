import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, post } from "../../../utils/apiMethod"

export const handleSendMessage = createAsyncThunk(
    "send-message",
    async (senderId, receiverId) => {
        try {
            const data = post("/send-message", {
                text,
                receiverId
            })
        } catch (error) {
            console.error("error sending message")
        }
    }
)

export const handleMessages = createAsyncThunk(
    "messages/getMessages",
    async (receiverId) => {
        try {
            const messages = await get(`/messages/${receiverId}`)
        } catch (error) {
            console.error("error while fetching messages", error)
        }
    }
)