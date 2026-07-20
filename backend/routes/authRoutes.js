import express from "express"
import { login, logoutUser, registerUser } from "../controllers/authController.js"

const router = express.Router()

router.route("/login").post(login)
router.route("/registerUser").post(registerUser)
router.route("/logoutUser").post(logoutUser)

export default router