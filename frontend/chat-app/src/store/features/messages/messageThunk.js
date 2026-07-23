import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { post } from "../../../utils/apiMethod"


export const handleSendMessage = createAsyncThunk(
    "send-message",
    async (senderId, receiverId) => {
        try {
            const data = post("/send-message", {
                senderId,
                receiverId
            })
        } catch (error) {
            console.error("error sending message")
        }
    }
)


export const handleMessages = createAsyncThunk(
    "get-messages",
    async (receiverId) => {
        try {
            const messages = get(`/messages${receiverId}`)
        } catch (error) {
            console.error("error while fetching messages", error)
        }
    }
)