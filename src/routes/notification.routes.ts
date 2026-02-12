import { Router } from 'express';
import { getNotificationsController, postNotificationController, updateNotificationController } from '../controllers/notification.controller';
const router = Router();
router.post('/notifications', postNotificationController);
router.get('/notifications', getNotificationsController)
router.patch('/notifications', updateNotificationController)
export default router;
