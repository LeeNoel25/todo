import express from 'express';
import todoController from '../controllers/todo.ts';
import todoSchema from '../schema/todoSchema.ts';
import validate from '../schema/validate';

const router = express.Router();

router
  .get('/', todoController.index)
  .post('/', todoSchema, validate, todoController.create)
  .delete('/:id', todoController.delete);

export default router;

// todoSchema: This runs first when a request comes in, applying all the validation rules to the description field.
// validate: This runs next, checking if any of the validation rules in validateTodo failed.If any rule failed,
// it sends a response with the errors.If all rules passed, it moves on to the controller.
