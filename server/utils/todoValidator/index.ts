import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const todoSchema = [
  body('description')
    .trim()
    .escape()
    .isLength({ max: 10 })
    .withMessage('Description must be less than 10 characters'),
];

export function todoValidator(req: Request, res: Response, next: NextFunction) {
  const requestId = res.locals.requestId as string;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    return res.status(400).json({
      success: false,
      requestId: requestId,
      errors: errorMessages,
    });
  }
  next();
}
