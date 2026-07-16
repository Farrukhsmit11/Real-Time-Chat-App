import express from "express"
import { getMessages, sendMessage } from "../controllers/messageController.js"
import protectRoute from "../middlewares/auth.js"
const router = express.Router()

router.route("/send-message").post(protectRoute, sendMessage)
router.route("/messages/:receiverId").get(protectRoute, getMessages)

export default router