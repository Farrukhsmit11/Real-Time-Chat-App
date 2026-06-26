import express from "express"
import { getUsers, signupUser } from "../controllers/authController.js"
const router = express.Router()

router.route("/getUsers").get(getUsers)
router.route("/signup").post(signupUser)

export default router