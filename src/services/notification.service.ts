import { redis } from '../config/redis';
import { randomUUID } from 'crypto';
import { Notification, NotificationStatus } from '../types/notifications';
const QUEUE_NAME = 'notification_queue';
const STORAGE_KEY = 'notifications';
export async function createNotificationService(title: string, message: string) {
  const notification: Notification = {
    id: randomUUID(),
    title,
    message,
    status: NotificationStatus.PENDING,
    createdAt: new Date().toISOString(),
  };
  // 🔹 Salvar como hash
  await redis.hset(`notification:${notification.id}`, {
    id: notification.id,
    title: notification.title,
    message: notification.message,
    status: notification.status,
    createdAt: notification.createdAt,
  });
  // 🔹 Guardar ID na lista geral
  await redis.lpush(STORAGE_KEY, notification.id);
  // 🔹 Enviar ID para fila
  await redis.lpush(QUEUE_NAME, notification.id);
  return notification;
}
export async function getNotificationsService() {
  // Pegar todos os IDs
  const ids = await redis.lrange(STORAGE_KEY, 0, -1);
  const notifications = [];
  for (const id of ids) {
    const data = await redis.hgetall(`notification:${id}`);

    if (Object.keys(data).length > 0) {
      notifications.push(data);
    }
  }
  return notifications;
}
export async function updateNotificationService(
  id: string,
  status: NotificationStatus
) {
  await redis.hset(`notification:${id}`, 'status', status);
}



