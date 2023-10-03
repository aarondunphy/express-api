import express from "express";
import userRoutes from "./routes/users.js";

export const app = express();

app.get("/", (_req, res) => res.json({ title: "Zip function uploaded!!!" }));

app.use("/users", userRoutes);
