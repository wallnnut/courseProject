import React, { useState } from "react";
import BookMark from "./bookmark";

const User = ({user, ...rest}) => {
  
  return (
    <tr>
        <td>{user.name}</td>
        <td> {user.qualities.map((quality, id) => {
            return (<span key={id} className={`badge m-1 bg-${quality.color}`}>{quality.name}</span>)
            
        })}
        </td>
        <td> {user.profession.name}</td> 
        <td> {user.completedMeetings}</td> 
        <td> {user.rate}</td>
        <td className="position-relative">
        <label className="btn" onClick={() => rest.onChange(user._id, user.bookmark)} > <BookMark status={user.bookmark}/> </label>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => rest.onDelete(user._id)}>Delete</button>
        </td>
        {rest.children}
    </tr>
  )
}

export default User