import UserProfile from "./components/user"
import Statistics from "./components/statistic"
import FriendList from "./components/friend"
import TransactionHistory from "./components/transition"
import user from "./user.json"
import data from "./data.json"
import friends from "./friends.json"
import transactions from "./transition.json"
import { GlobalStyle } from "./components/GlobalStyle"




export default function App() {
  return (<div>
    <GlobalStyle/>
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
  </div>)
}

