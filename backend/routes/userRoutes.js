import express from "express"
import { getUsers, searchUsers } from "../controllers/userController.js"

const router = express.Router()

router.route("/getUsers").get(getUsers)
router.route("/search-users").get(searchUsers)

export default router