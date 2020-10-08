import express from 'express';
import expressWinston from 'express-winston';
import router from './router';
import winstonConfig from './config/winstonConfig';

const app = express();
const PORT = 8000;

// for logging of Requests
app.use(expressWinston.logger(winstonConfig.request));

// import router.
app.use(router);

// for logging of errors
app.use(expressWinston.errorLogger(winstonConfig.error));

// start server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
