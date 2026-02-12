import { redis } from '../config/redis';

const QUEUE_NAME = 'notification_queue';
async function processQueue() {
  console.log('👂 Worker listening for notifications...');
  while (true) {
    try {
      // BRPOP espera até ter item na fila
      const result = await redis.brpop(QUEUE_NAME, 0);
      if (!result) continue;
      const notificationId = result[1];
      console.log(`📥 Processing notification ${notificationId}`);
      const notificationKey = `notification:${notificationId}`;
      const notification = await redis.hgetall(notificationKey);
      if (!notification.id) {
        console.log('⚠ Notification not found');
        continue;
      }
      // Simula processamento
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Simula sucesso 80% das vezes
      const success = Math.random() > 0.2;
      const newStatus = success ? 'SENT' : 'FAILED';
      await redis.hset(notificationKey, {
        status: newStatus,
      });
      console.log(`✅ Notification ${notificationId} → ${newStatus}`);
    } catch (error) {
      console.error('❌ Worker error:', error);
    }
  }
}
processQueue();
