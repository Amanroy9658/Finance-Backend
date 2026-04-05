import express from "express";
import { loginController } from "./auth.controller.js";

const router = express.Router();

// Public route (no auth required)
router.post("/login", loginController);

export default router;