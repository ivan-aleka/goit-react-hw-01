import styles from './Profile.module.css';
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img src={avatar} alt="User avatar" />
        <p className={styles.profileName}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
