const express = require("express");
const taskController = require("../controllers/tasksController");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTask);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
