import styles from './FriendListItem.module.css';
export default function FriendlistItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={styles.FriendlistItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
