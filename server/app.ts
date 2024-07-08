import express from 'express';
import cors from 'cors';
import mainRouter from './routes';
import { v4 as uuidV4 } from 'uuid';
import winstonLogger from './utils/Logger';

const app = express();

// Middlewares
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const requestId = (req.headers['x-request-id'] as string) || uuidV4();
    res.locals.requestId = requestId;
    req.headers['x-request-id'] = requestId;
    next();
  }
);
app.use(cors());
app.use(express.json());
app.use(winstonLogger);

// Primary app routes
app.use('/api/v1/', mainRouter);

export default app;
