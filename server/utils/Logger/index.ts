import { createLogger, format, transports } from 'winston';
import { Request, Response } from 'express';

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss.SSS',
    }),
    format.printf(({ level, message, method, timestamp, url, requestId }) => {
      return `${timestamp} METHOD:${method} URL:${url} ID:${requestId} ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()],
});

const logError = (req: Request, error: Error, statusCode: number = 500) => {
  const requestId = req.headers['x-request-id'] as string;
  const method = req.method;
  const url = req.originalUrl;
  const message = error.message;

  logger.error({
    message,
    method,
    timestamp: new Date().toISOString(),
    url,
    requestId,
    statusCode,
  });
};

export default logError;
