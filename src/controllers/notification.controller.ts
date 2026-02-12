import { Request, Response } from 'express';
import { createNotification, getNotificationsService } from '../services/notification.service';

export async function postNotification(req: Request, res: Response) {
  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(400).json({
      error: 'Invalid payload',
    });
  }

  const notification = await createNotification(title, message);

  return res.status(202).json({
    message: 'Notification queued',
    id: notification.id,
  });
}

export async function getNotifications(req: Request, res: Response) {
  const notifications = await getNotificationsService()

  return res.json(notifications)
}