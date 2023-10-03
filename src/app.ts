import express from "express";
import userRoutes from "./routes/users.js";

export const app = express();

app.get("/", (_req, res) => res.json({ title: "Hello World from express 1!" }));

app.use("/users", userRoutes);
