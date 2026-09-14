import mongoose from "mongoose"

const friendSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    friendId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    addedOn: { type: Date, required: true },
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session" , default: null }
},
    { timestamps: true }
)

export const Friend = mongoose.model("Friend", friendSchema)