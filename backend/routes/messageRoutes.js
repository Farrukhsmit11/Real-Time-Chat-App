import express from "express"
import { getMessages, sendMessage } from "../controllers/messageController.js"

const router = express.Router()

router.route("/get-messages").get(getMessages)
router.route("/send-message").post(sendMessage)

export default router