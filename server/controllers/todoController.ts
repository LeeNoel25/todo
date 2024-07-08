import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a todo
const create = async (req: Request, res: Response) => {
  const requestId = res.locals.requestId as string;
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({
        success: false,
        requestId: requestId,
        error: 'Description cannot be empty',
      });
    }
    const newTodo = await prisma.todo.create({
      data: { description },
    });
    res.status(201).json(newTodo);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      requestId: requestId,
      error: 'Internal server error',
    });
  }
};

// Get all todos
const index = async (req: Request, res: Response) => {
  try {
    const allTodos = await prisma.todo.findMany();
    res.json(allTodos);
  } catch (error: any) {
    console.error(error.message);
  }
};

//Delete a todo
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTodo = await prisma.todo.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Todo deleted' });
  } catch (error: any) {
    console.error(error.message);
  }
};

const todoController = {
  create,
  index,
  delete: deleteTodo,
};

export default todoController;
