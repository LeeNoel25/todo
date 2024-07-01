import { Request, Response } from 'express';
import { handleError } from '../config/logger.ts';
import { PrismaClient } from '@prisma/client';

import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

// Create a todo
const create = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    if (!description) {
      return handleError(req, res, 400, 'Description is required');
    }
    const newTodo = await prisma.todo.create({
      data: { description },
    });
    res.status(201).json(newTodo);
  } catch (err: any) {
    console.error(err.message);
    handleError(req, res, 500, 'Internal server error', err);
  }
};

//
const index = async (req: Request, res: Response) => {
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
