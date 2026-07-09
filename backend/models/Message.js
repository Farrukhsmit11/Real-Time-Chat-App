import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: { type: String }
},
    { timestamps: true }
)

export const Message = mongoose.model("Message", messageSchema)