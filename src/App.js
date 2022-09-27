import React, { useState } from "react";
import Users from "./components/Users";
import API from "./components/Api";
import SearchStatus from "./components/searchStatus";

function App() {
  const [users, setUser] = useState(API.users.fetchAll());
  const handleToggleBookmark = (id) => {
    setUser((prevState) => {
      return prevState.map((user) => {
        if (user._id === id) {
          user.bookmark = user.bookmark === false ? true : false;
        }
        return user;
      });
    });
  };
  const handleDelete = (id) => {
    setUser((prevState) => {
      return prevState.filter((user) => {
        return user._id !== id;
      });
    });
  };
  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        OnToggle={handleToggleBookmark}
        users={users}
      />
    </div>
  );
}

export default App;
