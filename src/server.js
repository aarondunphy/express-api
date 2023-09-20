import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.listen(3000);

app.get("/", (req, res) => res.json({ title: "Hello World" }));

app.use("/users", userRoutes);
