import "dotenv/config";
import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.listen(3000, () => console.log("App running on http://localhost:3000"));

app.get("/", (req, res) => res.json({ title: "Hello World from express 1!" }));

app.use("/users", userRoutes);