import { Router } from 'express';
import { getNotifications, postNotification } from '../controllers/notification.controller';
const router = Router();
router.post('/notifications', postNotification);
router.get('/notifications', getNotifications)
export default router;
