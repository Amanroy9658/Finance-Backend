import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

export default app;