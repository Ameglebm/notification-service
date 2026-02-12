import { Request, Response } from 'express';
import { createNotification } from '../services/notification.service';

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
