import express from "express"
import { getFriends } from "../controllers/friendsController.js"

const router = express.Router()

router.route("/get-friends").get(getFriends)

export default router