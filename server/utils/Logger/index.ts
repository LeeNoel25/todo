import { createLogger, format, transports } from 'winston';
import { Request, Response, NextFunction } from 'express';
import { BasicApiResponse } from '../../interfaces/api';

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss.SSS',
    }),
    format.printf(
      ({
        timestamp,
        method,
        url,
        requestId,
        statusCode,
        latency,
        message,
        level,
      }) => {
        return `${level}: ${message} | Timestamp: ${timestamp} | Req.ID: ${requestId} | StatusCode: ${statusCode} | Method: ${method} | Latency: ${latency}ms | Url: ${url}`;
      }
    )
  ),
  transports: [new transports.Console()],
});

const winstonLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = process.hrtime();
  res.on('finish', () => {
    const diff = process.hrtime(start);
    const latency = diff[0] * 1e3 + diff[1] * 1e-6;
    const response: BasicApiResponse = {
      requestId: res.locals.requestId,
      statusCode: res.statusCode,
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl,
      latency: parseFloat(latency.toFixed(2)),
    };
    if (res.statusCode >= 400) {
      logger.error({
        message: 'Error occurred',
        ...response,
      });
    } else {
      logger.info({
        message: 'Request successful',
        ...response,
      });
    }
  });
  next();
};

export default winstonLogger;
