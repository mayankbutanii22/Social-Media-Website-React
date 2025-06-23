import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNotification,
  deleteNotification,
  markAsRead,
  markAsUnread,
  clearAllNotifications,
} from '../Redux/notificationsSlice';
import styles from './Notifications.module.css';

function Notifications() {
  const notifications = useSelector((state) => state.notifications.notifications);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addNotification({
      id: Date.now(),
      text: '🔔 You have a new alert!',
      read: false,
      time: new Date().toLocaleTimeString(),
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notifications</h1>
      <div className={styles.actions}>
        <button onClick={handleAdd} className={styles.addBtn}>Add Notification</button>
        <button onClick={() => dispatch(clearAllNotifications())} className={styles.clearAllBtn}>Clear All</button>
      </div>

      {notifications.length === 0 ? (
        <p className={styles.empty}>No notifications yet.</p>
      ) : (
        <ul className={styles.list}>
          {notifications.map((n) => (
            <li key={n.id} className={`${styles.item} ${n.read ? styles.read : ''}`}>
              <div className={styles.textSection}>
                <span className={styles.text}>{n.text}</span>
                <span className={styles.time}>{n.time}</span>
              </div>
              <div className={styles.buttons}>
                {n.read ? (
                  <button onClick={() => dispatch(markAsUnread(n.id))} className={styles.unreadBtn}>Mark Unread</button>
                ) : (
                  <button onClick={() => dispatch(markAsRead(n.id))} className={styles.readBtn}>Mark Read</button>
                )}
                <button onClick={() => dispatch(deleteNotification(n.id))} className={styles.deleteBtn}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
