import "dotenv/config";
import "./tracing.js";
import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.listen(3000);

app.get("/", (req, res) => res.json({ title: "Hello World from express 1" }));

app.use("/users", userRoutes);
