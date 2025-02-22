import clsx from 'clsx';
import styles from './FriendListItem.module.css';
export default function FriendlistItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={styles.FriendlistItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          styles.status,
          isOnline ? styles.Online : styles.Offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
