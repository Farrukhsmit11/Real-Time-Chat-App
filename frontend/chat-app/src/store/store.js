import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../store/features/auth/authSlice"
import userReducer from "../store/features/users/userSlice"
import messageReducer from "../store/features/messages/messageSlice"
import chatReducer from "../store/features/chats/chatSlice"
import requestReducer from "../store/features/requests/requestSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        message: messageReducer,
        chat: chatReducer,
        request: requestReducer
    }
})