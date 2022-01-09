import UserProfile from "./components/Profile/user";
import Statistics from "./components/Statistic/statistic";
import FriendList from "./components/Friends/FriendsList";
import TransactionHistory from "./components/Transitions/transition";
import user from "./components/Profile/user.json";
import data from "./components/Statistic/data.json";
import friends from "./components/Friends/friends.json";
import transactions from "./components/Transitions/transition.json";

export default function App() {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
