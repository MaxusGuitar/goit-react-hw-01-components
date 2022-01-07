import PropTypes from "prop-types";
import FriendListItem from "./FriendsList";
import style from "./friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
