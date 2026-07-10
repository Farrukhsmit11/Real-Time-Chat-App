import express from "express"
import { sendMessage } from "../controllers/messageController.js"
import protectRoute from "../middlewares/auth.js"
const router = express.Router()

router.route("/send-message").post(protectRoute, sendMessage)


export default router