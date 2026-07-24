import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../store/features/auth/authSlice"
import userReducer from "../store/features/users/userSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer
    }
})