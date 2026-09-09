import express from "express"
import { getFriends, searchFriends } from "../controllers/friendsController.js"

const router = express.Router()

router.route("/get-friends").get(getFriends)
router.route("/search-friends").get(searchFriends)

export default router