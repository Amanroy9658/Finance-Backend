import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware.js";
import userRoutes from "./modules/user/user.route.js";
import transactionRoutes from "./modules/transaction/transaction.route.js";
import analyticsRoutes from "./modules/ana;ytics/analytics.routes.js";
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/analytics", analyticsRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

export default app;