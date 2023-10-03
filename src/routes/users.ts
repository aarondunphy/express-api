import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok === false) {
    return res
      .json({ error: "Something went wrong fetching users" })
      .status(500);
  }
  const data = await response.json();
  return res.json(data);
});

router.get("/:id", (req, res) => {
  res.json({ user: { id: req.params.id, name: "Bob" } });
});

export default router;
