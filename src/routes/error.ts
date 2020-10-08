import express from 'express';

const error = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  // here we cause an error in the pipeline so we see express-winston in action.
  return next(
    new Error('This is an error and it should be logged to the console')
  );
};

export default error;
