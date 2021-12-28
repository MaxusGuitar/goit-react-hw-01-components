import UserProfile from "./components/user"
import Statistics from "./components/statistic"
import user from "./user.json"
import data from "./data.json"


export default function App() {
  return (<div>
    <UserProfile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
  </div>)
}

