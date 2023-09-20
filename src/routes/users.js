import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Aaron" },
    { id: 2, name: "Laura" },
  ]);
});

router.get("/:id", (req, res) => {
  res.json({ user: { id: req.params.id, name: "Bob" } });
});

export default router;
