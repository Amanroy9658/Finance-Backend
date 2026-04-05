import express from "express";
import { loginController } from "./auth.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { allowRoles } from "../../middleware/role.middleware.js";
const router = express.Router();

// Public route (no auth required)
router.post("/login", loginController);
router.get("/", protect, allowRoles("admin"),...);
export default router;