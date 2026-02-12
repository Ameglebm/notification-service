export type NotificationStatus = 'PENDING' | 'SENT' | 'FAILED';
export interface Notification {
  id: string;
  title: string;
  message: string;
  status: NotificationStatus;
  createdAt: string;
}
