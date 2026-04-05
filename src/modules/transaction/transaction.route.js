import express from "express";
import {
    createTransactionController,
    getTransactionsController,

} from "./transaction.controller.js";
import { allowRoles} from "../../middleware/role.middleware.js";
const router = express.Router();

// temporary user  for testing
router.use((req, res, next) => {
    req.user ={ role: "admin", _id: "12dummyuserid1234567890"};
    next();
});
router.post("/", allowRoles("admin"), createTransactionController);
router.get("/", allowRoles("admin", "analyst"), getTransactionsController);

export default router;
