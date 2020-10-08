import express from 'express';

const root = (req: express.Request, res: express.Response): void => {
  res.write('Hello World!');
  res.end();
};

export default root;
