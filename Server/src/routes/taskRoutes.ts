// taskRoutes.ts - CONNECTS ENDPOINTS TO CONTROLLER FUNCTIONS

import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/taskController";
import { validatedId } from "../middleware/validated";

// All paths here start with /api/tasks (see app.ts)
// This follows RESTAPI

const router = Router();

router.post("/", createTask);
router.get("/allTasks", getAllTasks);

// validateId runs first; the controller only runs if the id is valid
router.patch("/:id", validatedId, updateTask);
router.delete("/:id", validatedId, deleteTask);
router.get("/:id", validatedId, getTaskById);

export default router;
