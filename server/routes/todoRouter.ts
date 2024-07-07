import express from 'express';
import todoController from '../controllers/todoController.ts';
import todoSchema from '../schema/todoSchema.ts';
import validate from '../schema/validate.ts';

const router = express.Router();

router
  .get('/', todoController.index)
  .post('/', todoSchema, validate, todoController.create)
  .delete('/:id', todoController.delete);

export default router;
