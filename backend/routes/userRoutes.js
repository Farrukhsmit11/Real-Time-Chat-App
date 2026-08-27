import express from "express"
import { getUsers } from "../controllers/userController.js"
import protectRoute from "../middlewares/auth.js"

const router = express.Router()

router.route("/getUsers").get(protectRoute, getUsers)

export default router