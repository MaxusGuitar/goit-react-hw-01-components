import UserProfile from "./components/user"
import user from "./user.json"

export default function App() {
  return (<div>
    <UserProfile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  </div>)
}