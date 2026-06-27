import express from "express"
import { getUsers, login, signupUser } from "../controllers/authController.js"
const router = express.Router()

router.route("/getUsers").get(getUsers)
router.route("/signup").post(signupUser)
router.route("/login").post(login)

export default router