import { Router } from "express";
import { listTasks, addTask, completeTask } from "./store.js";

const router = Router();

router.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title?.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }
  const task = addTask({ title: title.trim() });
  res.status(201).json(task);
});

router.get("/tasks", (req, res) => {
  res.json(listTasks());
});

router.post("/tasks/:id/complete", (req, res) => {
  const task = completeTask(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

export default router;
