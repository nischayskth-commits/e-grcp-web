import notificationData from "../../../mocks/notifications.json";

const STORAGE_KEY = "notificationData";

const getNotifications = async () => {

  const stored =
    localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notificationData)
  );

  return notificationData;
};

const saveNotifications = (
  notifications
) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notifications)
  );
};

export default {
  getNotifications,
  saveNotifications,
};