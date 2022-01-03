import PropTypes from "prop-types";
import { FiDisc } from 'react-icons/fi';

const FriendList = ({ friends  }) => {
    return (
        <ul className="friend-list">
            {friends.map((a) => 
      <li key={a.id} className="item" ><FiDisc/>
  <span className="status">{a.isOnline}</span>
  <img className="avatar" src={a.avatar} alt="User avatar" width="48" />
                    <p className="name">{a.name}</p>
</li>
  )}
</ul>
    )
}

FriendList.propTypes = {
friends: PropTypes.array,
}

export default FriendList