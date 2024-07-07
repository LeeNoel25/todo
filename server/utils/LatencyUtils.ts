import { Request, Response, NextFunction } from 'express';
import { BasicApiResponse } from '../interfaces/api';

const latencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = process.hrtime();

  res.on('finish', () => {
    const diff = process.hrtime(start);
    const latency = diff[0] * 1e3 + diff[1] * 1e-6; // convert to milliseconds

    const response: BasicApiResponse = {
      statusCode: res.statusCode,
      method: req.method,
      route: req.originalUrl,
      latency: parseFloat(latency.toFixed(2)), // rounded to two decimal places
      timestamp: new Date().toISOString(),
    };

    console.log(response);
  });
  next();
};

export default latencyMiddleware;
