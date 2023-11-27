export interface Notification {
  [key: string]: any;
  id: number;
  variant: NotificationVariant;
  timeout: number;
}

export type NotificationVariant = 'error' | 'success';
