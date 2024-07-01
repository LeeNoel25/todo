import { body } from 'express-validator';

const todoSchema = [
  // Validate the description field
  body('description')
    .isString()
    .withMessage('Description must be a string')
    .isLength({ min: 5, max: 25 })
    .withMessage('Description must be between 8 and 25 characters')
    .isAlphanumeric()
    .withMessage('Description must be alphanumeric')
    .trim(),
];

export default todoSchema;
