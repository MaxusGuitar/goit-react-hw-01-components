import PropTypes from "prop-types";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className="item" key={id}>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <span className={isOnline ? "online" : "offline"}></span>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem