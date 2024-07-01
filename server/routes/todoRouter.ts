import express from "express";
import todoController from "../controllers/todo.ts";

const router = express.Router();

router
  .get("/", todoController.index)
  .post("/", todoController.create)
  .delete("/:id", todoController.delete);

export default router;
