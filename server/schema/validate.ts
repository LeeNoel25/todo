import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import logError from '../utils/Logger';

function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map(err => err.msg)
      .join(', ');
    const error = new Error(errorMessages);

    // Log the validation error
    logError(req, error, 400);
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

export default validate;
