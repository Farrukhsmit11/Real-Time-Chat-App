import express from "express";
import { getSessions } from "../controllers/sessionController.js";

const router = express.Router();

router.route("/get-sessions").post(getSessions)

export default router;