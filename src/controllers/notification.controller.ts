import { Request, Response } from 'express';
import { createNotificationService, getNotificationsService, updateNotificationService } from '../services/notification.service';
import { Params } from '../types/notifications'

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
export async function getNotificationsController( req: Request, res: Response) {
  const notifications = await getNotificationsService()
  return res.json(notifications)
}
export async function updateNotificationController(
  req: Request<Params>,
  res: Response
) {
  const { id } = req.params;
  const { status } = req.body;

  await updateNotificationService(id, status);

  return res.json({ message: 'Updated successfully' });
}

