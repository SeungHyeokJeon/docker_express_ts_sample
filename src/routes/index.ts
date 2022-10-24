import { Router } from 'express';
import UserRouter from './UserRouter';

const router: Router = Router();

router.use('/', UserRouter);

export default router;
