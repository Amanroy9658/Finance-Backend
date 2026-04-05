import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

//DB connect
connectDB();

app.get("/",(req,res) => {
    res.send("API is running");
});

export default app;