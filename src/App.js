import React, { useState } from "react";
import Users from "./components/users";
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
      <div>
        <SearchStatus length={users.length} />
      </div>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Users
              users={users}
              onDelete={handleDelete}
              onChange={handleToggleBookmark}
            />
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
