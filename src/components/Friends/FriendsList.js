import PropTypes from "prop-types";
import style from "./friends.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={style.item} key={id}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
