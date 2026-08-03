import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedUser: null
}

const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },

        clearSelectedUser: (state, action) => {
            state.selectedUser = null
        }
    }
})

export const { setSelectedUser, clearSelectedUser } = chatSlice.actions
export default chatSlice.reducer