import express from "express";
import {
  getSummaryController,
  getCategoryController,
  getTrendsController,
} from "./analytics.controller.js";

import { allowRoles } from "../../middleware/role.middleware.js";

const router = express.Router();

// temp user
router.use((req, res, next) => {
  req.user = { role: "admin" };
  next();
});

router.get("/summary", allowRoles("admin", "analyst"), getSummaryController);
router.get("/category", allowRoles("admin", "analyst"), getCategoryController);
router.get("/trends", allowRoles("admin", "analyst"), getTrendsController);

export default router;