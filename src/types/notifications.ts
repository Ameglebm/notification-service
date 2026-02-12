export type NotificationStatus = 'PENDING' | 'PROCESSED';
export interface Notification {
  id: string;
  title: string;
  message: string;
  status: NotificationStatus;
  createdAt: string;
}
