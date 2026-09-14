import express from "express"
import { getFriends } from "../controllers/friendsController.js"
import protectRoute from "../middlewares/auth.js"

const router = express.Router()

router.route("/get-friends").get(protectRoute, getFriends)

export default router