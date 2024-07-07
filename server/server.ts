import express from 'express';
import cors from 'cors';
import mainRouter from './routes';
import { v4 as uuidV4 } from 'uuid';
import config from './config';
import latencyMiddleware from './utils/LatencyUtils';

const app = express();

// Express configuration
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const requestId = (req.headers['x-request-id'] as string) || uuidV4();
    req.headers['x-request-id'] = requestId;
    next();
  }
);

app.use(cors());
app.use(express.json());
// app.use(latencyMiddleware);

// Primary app routes
app.use('/api/v1/', mainRouter);

const PORT = config.master.port;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
