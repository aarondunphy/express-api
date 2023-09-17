import express from "express";

const app = express();

app.listen(3000);

app.get("/", (req, res) => res.json({ title: "Hello World" }));

app.get("/users", (req, res) =>
  res.json({
    data: [
      { id: 1, name: "Aaron" },
      { id: 2, name: "Laura" },
    ],
  })
);
