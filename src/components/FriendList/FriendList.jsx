import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.FriendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
