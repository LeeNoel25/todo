import { Request, Response } from 'express';
import { createLogger, format, transports } from 'winston';
import { BasicApiResponse } from './responseInterfaces';
import { v4 as uuidv4 } from 'uuid';

const getFormattedTimestamp = (): string => {
  const date = new Date();
  return date.toISOString();
};

export const logger = createLogger({
  level: 'debug', //error, warn, info, verbose, debug, silly
  format: format.combine(
    // .simple(), .colorize(), .timestamp(), .json(), .printf(), prettyPrint(), .label()
    format.timestamp(),
    format.json(),
    format.printf(({ level, message, method, timestamp, url, requestId }) => {
      //stack, label
      return `${timestamp} METHOD:${method} URL:${url} ID:${requestId} ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()], // File, HTTP, stream
});

export const handleError = (
  req: Request,
  res: Response,
  statusCode: number,
  errorMessage: string,
  err?: Error
) => {
  const requestId = res.locals.requestId || uuidv4();
  const timestamp = getFormattedTimestamp();
  // errorResponse is of type BasicApiResponse, which is defined in responseInterfaces.ts
  const errorResponse: BasicApiResponse = {
    requestId,
    // status: 'error',
    timestamp,
    method: req.method,
    url: req.originalUrl,
    message: errorMessage,
  };
  // Log the error
  logger.error(errorResponse);
  // Send the error response
  res.status(statusCode).json(errorResponse);
};
