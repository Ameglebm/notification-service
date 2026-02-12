import { Router } from 'express';
import { postNotification } from '../controllers/notification.controller';

const router = Router();

router.post('/notifications', postNotification);

export default router;
