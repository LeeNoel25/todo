//V1 main router

import express from 'express';
import todoRouter from './todoRouter';

const router = express.Router();

router.use('/tasks', todoRouter);

export default router;