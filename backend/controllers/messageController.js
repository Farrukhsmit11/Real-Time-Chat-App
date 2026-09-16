import { Session } from "../models/Session.js"
import { Friend } from "../models/Friend.js"

export const getMessages = async (request, response) => {

    try {

        const { sessionId } = request.params

        if (!sessionId) {
            response.status(400).send({ message: "Session Id is required" })
            return
        }

        const session = await Session.findById(sessionId)

        if (!session) {
            response.status(400).send({ message: "Session not found" })
            return
        }

        response.status(200).json({
            message: "Session founded sucessfully", data: session.messages
        })

    } catch (error) {
        console.error("Failed to Fetch Messages", error)
    }
}


export const sendMessage = async (request, response) => {

    const senderId = request.user.id;
    const { text, receiverId } = request.body;

    try {
        if (!text) {
            return response.status(400).send({
                message: "Please enter message"
            });
        }

        if (!senderId || !receiverId) {
            return response.status(400).send({
                message: "senderId and receiverId required"
            });
        }

        const newMessage = {
            senderId,
            text
        };

        let session;

        const existingSession = await Session.findOne({
            $or: [
                {
                    senderId: senderId,
                    receiverId: receiverId
                },
                {
                    senderId: receiverId,
                    receiverId: senderId
                }
            ]
        });

        if (existingSession) {

            existingSession.messages.push(newMessage);

            await existingSession.save();

            session = existingSession;

        }
        else {
            session = await Session.create({
                senderId,
                receiverId,
                messages: [newMessage]
            });
        }

        await Friend.updateMany(
            {
                $or: [
                    { userId: senderId, friendId: receiverId },
                    { userId: receiverId, friendId: senderId }
                ]
            },

            {
                sessionId: session._id
            }
        )

        response.status(200).json({
            message: "Message sent successfully",
            sessionId: session._id,
            data: newMessage,

        });

    } catch (error) {
        console.error("Error sending message:", error);

        return response.status(500).json({
            message: "Internal server error"
        });
    }
};

export default { sendMessage, getMessages }