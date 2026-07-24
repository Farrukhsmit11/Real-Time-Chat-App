import express from "express"
import { getProfile, login, logout, registerUser } from "../controllers/authController.js"
import protectRoute from "../middlewares/auth.js"

const router = express.Router()

router.route("/login").post(login)
router.route("/registerUser").post(registerUser)
router.route("/logoutUser").post(logout)
router.route("/get-profile").get(protectRoute, getProfile)

export default router