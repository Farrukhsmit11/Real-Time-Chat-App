import express from "express"
import { login, registerUser } from "../controllers/authController.js"
import upload from "../config/multer.js"

const router = express.Router()

router.route("/login").post(login)
router.route("/registerUser", upload.single("attachment"))
.post(registerUser)

export default router