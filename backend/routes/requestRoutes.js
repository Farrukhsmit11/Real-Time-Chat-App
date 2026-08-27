import express from "express"
import { approveRequest, getRequests, rejectRequest, sendRequest } from "../controllers/requestController.js"
import protectRoute from "../middlewares/auth.js"

const router = express.Router()

router.route("/getRequests").get(protectRoute, getRequests)
router.route("/sendRequest").post(protectRoute, sendRequest)
router.route("/approve-request").post(protectRoute, approveRequest)
router.route("/reject-request").post(protectRoute, rejectRequest)

export default router