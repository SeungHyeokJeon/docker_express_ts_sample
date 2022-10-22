import { Router } from 'express';
import { PostController } from '../controllers';

const router: Router = Router();

router.get('/:postId', PostController.selectPost);

export default router;
