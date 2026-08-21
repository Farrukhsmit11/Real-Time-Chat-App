import express from "express"
import { getUsers, searchUsers } from "../controllers/userController.js"
import protectRoute from "../middlewares/auth.js"

const router = express.Router()

router.route("/getUsers").get(protectRoute, getUsers)
router.route("/search-users").get(searchUsers)

export default router