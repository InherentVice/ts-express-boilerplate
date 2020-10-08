import express from 'express';

const hello = (req: express.Request, res: express.Response): void => {
  res.json({ message: 'Hello World!' });
  res.end();
};

export default hello;
