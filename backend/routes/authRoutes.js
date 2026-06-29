import express from "express"
import { getUsers, login } from "../controllers/authController.js"
const router = express.Router()

router.route("/getUsers").get(getUsers)
router.route("/login").post(login)

export default router