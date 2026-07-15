import express from "express"
import { getMessages, sendMessage } from "../controllers/messageController.js"
import protectRoute from "../middlewares/auth.js"
const router = express.Router()

router.route("/send-message").post(protectRoute, sendMessage)
router.route("/get-messages/:receiverId").get(getMessages)

export default router