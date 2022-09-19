import React from "react";
import User from "./user"

const Users = ({users, ...rest}) => {
  return (
    <>
    {users.map(user => {
      return (<User key={user._id} user={user} onDelete={rest.onDelete} onChange={rest.onChange}> 
      </User >)
    })}
     
  </>
)
  
}

export default Users
