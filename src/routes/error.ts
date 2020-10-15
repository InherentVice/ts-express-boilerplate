import { Request, Response, NextFunction } from 'express';

const error = (req: Request, res: Response, next: NextFunction): void => {
  // here we cause an error in the pipeline so we see express-winston in action.
  return next(
    new Error('This is an error and it should be logged to the console')
  );
};

export default error;
