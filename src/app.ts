import express from "express";
import userRoutes from "./routes/users.js";

export const app = express();

app.get("/", (_req, res) => res.json({ title: "WE HAVE A WORKING CI/CD" }));

app.use("/users", userRoutes);
