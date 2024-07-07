import { body } from 'express-validator';

const todoSchema = [
  body('description')
    .trim()
    .escape()
    .isLength({ max: 10 })
    .withMessage('Description must be less than 10 characters'),
];

export default todoSchema;
