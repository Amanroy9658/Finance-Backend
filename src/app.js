import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware.js";
import userRoutes from "./modules/user/user.route.js";
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

export default app;