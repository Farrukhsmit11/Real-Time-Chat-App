import express from "express"
import { getRequests, sendFriendRequest } from "../controllers/requestController.js"
import protectRoute from "../middlewares/auth.js"

const router = express.Router()

router.route("/getRequests").get(protectRoute, getRequests)
router.route("/sendRequest").post(protectRoute, sendFriendRequest)

export default router