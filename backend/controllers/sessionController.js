import { Session } from "../models/Session.js"

export const getSessions = async (request, response) => {
    try {
        const data = await Session.find()
        response.status(200).json({ message: "Sessions fetched sucessfully", data })
    } catch (error) {
        console.error("Error Creating Sessions", error)
    }
}

export default { getSessions }