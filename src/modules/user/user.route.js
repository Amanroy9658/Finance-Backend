import express from "express";
import {
    createUserController,
    getAllUsersController,
    updateUserController
} from "./user.controller.js";
import { allowRoles } from "../../middleware/role.middleware.js";

const router = express.Router();

router.use((req, res, next) => {
    req.user = { role: "admin"};
    next();
});

router.post("/", allowRoles("admin"), createUserController);
router.get("/", allowRoles("admin", "analyst"), getAllUsersController);
router.put("/:id", allowRoles("admin"), updateUserController);

export default router;