import css from '../components/Profile.module.css';
import clsx from 'clsx';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>satName</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
