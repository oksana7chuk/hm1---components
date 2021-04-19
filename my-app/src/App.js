import React from "react";
import Profile from "./components/profile/profile/Profile";
import user from "./components/profile/profile/user.json";
import Statistics from "./components/profile/statistics/Statistics";
import statisticalData from "./components/profile/statistics/statistical-data.json";
import FriendList from "./components/profile/friendList/FriendList";
import friends from "./components/profile/friendList/friends.json";
import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "./components/transactions/transactions.json";

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      status={user.status}
    />
    <Statistics title="UPLOAD STATS" stats={statisticalData} />
    <Statistics stats={statisticalData} />;
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
