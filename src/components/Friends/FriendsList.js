import PropTypes from "prop-types";
import style from "./friends.module.css"

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={style.item} key={id}>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <span className={isOnline ? style.online : style.offline}></span>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem