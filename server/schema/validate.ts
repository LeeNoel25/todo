import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

function validate(req: Request, res: Response, next: NextFunction) {
  // Get the validation results
  const errors = validationResult(req);
  // If there are errors, send a response with the errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // If no errors, move on to the controller
  next();
}

export default validate;