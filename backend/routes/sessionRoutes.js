import express from "express";
import { createSession, getSessions } from "../controllers/sessionController.js";

const router = express.Router();

router.route("/create-session").post(createSession);
router.route("/get-sessions").post(getSessions)

export default router;