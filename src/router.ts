import express from 'express';
import routes from './routes';

const router = express.Router();
router.get('/', routes.hello);
router.get('/hello', routes.hello);
router.get('/error', routes.error);

export default router;
