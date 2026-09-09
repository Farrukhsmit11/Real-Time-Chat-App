import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    messages: [
        {
            senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String, required: true },
        }
    ]
},
    { timestamps: true }
)


export const Session = mongoose.model("Session", sessionSchema)