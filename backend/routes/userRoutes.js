import express from "express"
import { getUsers } from "../controllers/userController.js"

const router = express.Router()

router.route("/getUsers").get(getUsers)

export default router