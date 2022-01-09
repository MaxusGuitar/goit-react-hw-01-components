import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import style from "./friends.module.css";

const FriendList = ({ friends, id }) => {
  return (
    <ul className={style.friendList} key={id}>
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
  id: PropTypes.number,
};

export default FriendList;
