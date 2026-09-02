import { Session } from "../models/Session.js"

export const getSessions = async (request, response) => {
    try {
        const data = await Session.find()
        response.status(200).json({ message: "Sessions fetched sucessfully", data })
    } catch (error) {
        console.error("Error Creating Sessions", error)
    }
}

export const createSession = async (request, response) => {

    const { user1, user2 } = request.body

    try {
        if (!user1 || !user2) {
            response.status(400).send({ message: "User1 and User2 required" })
            return
        }

        const existingSession = await Session.findOne({
            $or: [
                { user1: user1, user2: user2 },
                { user1: user2, user2: user1 }
            ]
        })

        if (existingSession) {
            response.status(400).send({ message: "Session already created" })
            return
        }

        if (!existingSession) {
            const newSession = await Session.create({
                user1: user1,
                user2: user2
            })
            response.status(200).json({ message: "Session Created Sucessfully", newSession })
        }

    } catch (error) {
        console.error("Error creating session", error)
        response.status(500).json({ message: "Internal Server Error", error })
    }
}

export default { createSession }