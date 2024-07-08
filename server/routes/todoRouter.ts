import express from 'express';
import todoController from '../controllers/todoController.ts';
import { todoSchema, todoValidator } from '../utils/todoValidator/index.ts';

const router = express.Router();

router
  .get('/', todoController.index)
  .post('/', todoSchema, todoValidator, todoController.create)
  .delete('/:id', todoController.delete);

export default router;
