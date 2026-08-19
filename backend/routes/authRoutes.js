import express from "express"
import { getProfile, login, logout, registerUser } from "../controllers/authController.js"
import protectRoute from "../middlewares/auth.js"
import { changePassword, forgotPassword, verifyOtp } from "../controllers/forgotPassword.js"

const router = express.Router()

router.route("/login").post(login)
router.route("/registerUser").post(registerUser)
router.route("/logoutUser").post(logout)
router.route("/get-profile").get(protectRoute, getProfile)
router.route("/forgotPassword").post(forgotPassword)
router.route("/verifyOtp").post(verifyOtp)
router.route("/resetPassword").post(changePassword)

export default router