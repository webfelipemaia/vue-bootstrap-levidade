// utils/useNotification.js
import { useNotificationStore } from '../store/Notifications';

export const useNotification = () => {
  const notificationStore = useNotificationStore();

  const notify = (options) => {
    const defaultOptions = {
      type: 'light',
      text: 'Notification message',
      comment: '',
      notificationTime: 'just now',
      timeout: 5000
    };

    const notification = { ...defaultOptions, ...options };
    notificationStore.createItem(notification);
  };

  return { notify };
};