import {Request, Response } from 'express';

const hello = (req: Request, res: Response): void => {
  res.json({ message: 'Hello World!' });
  res.end();
};

export default hello;
