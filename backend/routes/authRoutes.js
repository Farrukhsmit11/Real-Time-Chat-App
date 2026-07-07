import express from "express"
import { login, registerUser } from "../controllers/authController.js"

const router = express.Router()

router.route("/login").post(login)
router.route("/registerUser").post(registerUser)

export default router