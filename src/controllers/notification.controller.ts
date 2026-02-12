import { Request, Response } from 'express';
import { createNotificationService, getNotificationsService, updateNotificationService } from '../services/notification.service';

export async function postNotificationController(req: Request, res: Response) {
  const { title, message } = req.body;
  if (!title || !message) {
    return res.status(400).json({
      error: 'Invalid payload',
    });
  }
  const notification = await createNotificationService(title, message);
  return res.status(202).json({
    message: 'Notification queued',
    id: notification.id,
  });
}
export async function getNotificationsController( res: Response) {
  const notifications = await getNotificationsService()
  return res.json(notifications)
}
export async function updateNotificationController() {
  const NotificationStatus = await updateNotificationService
}
