import express from 'express';
import router from '../router';

const createMockServer = (): express.Express => {
  const app = express();
  app.use(router);
  return app;
};

export default createMockServer;
