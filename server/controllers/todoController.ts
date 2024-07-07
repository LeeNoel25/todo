import { Request, Response } from 'express';
import { handleError } from '../config/logger.ts';
import { PrismaClient } from '@prisma/client';
import logError from '../utils/Logger/index.ts';
import moment from 'moment';

const prisma = new PrismaClient();

// Create a todo
const create = async (req: Request, res: Response) => {
  const requestId = req.headers['x-request-id'] as string;
  try {
    const { description } = req.body;
    if (!description) {
      const error = new Error('Description is required');
      logError(req, error, 400);
      return res.status(400).json({ error: 'Description is required' });
    }
    const newTodo = await prisma.todo.create({
      data: { description },
    });
    res.status(201).json(newTodo);
  } catch (err: any) {
    logError(req, err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//
const index = async (req: Request, res: Response) => {
  const requestId = req.headers['x-request-id'] as string;
  try {
    const allTodos = await prisma.todo.findMany();
    res.json(allTodos);
  } catch (err: any) {
    console.error(err.message);
    handleError(req, res, 500, 'Internal server error', err);
  }
};

//Delete a todo
const deleteTodo = async (req: Request, res: Response) => {
  const requestId = req.headers['x-request-id'] as string;
  try {
    const { id } = req.params;
    const deletedTodo = await prisma.todo.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Todo deleted' });
  } catch (err: any) {
    console.error(err.message);
    handleError(req, res, 500, 'Internal server error', err);
  }
};

const todoController = {
  create,
  index,
  delete: deleteTodo,
};

export default todoController;
