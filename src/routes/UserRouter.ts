import { Router } from 'express';
import { UserController } from '../controllers';

const router: Router = Router();

router.get('/:userId', UserController.selectUser);

export default router;
