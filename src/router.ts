import express from 'express';
import routes from './routes';

const router = express.Router();
router.get('/', routes.root);
router.get('/error', routes.error);

export default router;
