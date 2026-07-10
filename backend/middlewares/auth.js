import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

const protectRoute = async (request, response, next) => {
    try {
        const token = request.headers.token

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            response.status(400).send({ message: "user not found" })
            return
        }
        request.user = user
        console.log(request.user);
        next()

    } catch (error) {
        console.error("Error authenticating user", error)
    }
}

export default protectRoute