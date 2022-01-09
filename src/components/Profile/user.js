import PropTypes from "prop-types";
import style from "./profile.module.css";

const UserProfile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.li__text}>
          <span className={style.label}>Followers: </span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.li__text}>
          <span className={style.label}>Views: </span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.li__text}>
          <span className={style.label}>Likes: </span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
// ---------------------для описания типов----------------------
UserProfile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number), //тут объект, а не число ибо в нём есть несколько элементов
};

export default UserProfile;
