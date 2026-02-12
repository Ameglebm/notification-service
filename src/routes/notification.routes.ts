import { Router } from 'express';
import { getNotifications, postNotification } from '../controllers/notification.controller';

const router = Router();

router.post('/', postNotification);
router.get('/', getNotifications)

export default router;
