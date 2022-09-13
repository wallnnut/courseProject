import React, { useState, useEffect } from "react";
import API from "./Api/index";

const Users = () => {
    
    const [users, setUser] = useState(API.users.fetchAll())

    function renderPhrase(number) {
      let txt = [' человек', ' человека', ' человек']
      let cases = [2, 0, 1, 1, 1, 2];
      let verb = number > 1 ? ' тусанут' : ' тусанет'
      let phrase = txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
      const res = number + phrase + verb + ' с тобой'
      if (number === 0) {
        return (
          <h2>
        <span className="badge bg-danger">
          {res}
        </span>
      </h2>
        )
      }
      return (
        <h2>
        <span className="badge bg-primary">
          {res}
        </span>
      </h2>
      )
  }

    let res = users.map(function(user) {
      return (<tr key={user._id}>
        <td> {user.name} </td>
        <td> {user.qualities.map((quality, id) => {
            return (<span key={id} className={`badge m-1 bg-${quality.color}`}>{quality.name}</span>)
            
        })}
        </td>
        <td> {user.profession.name}</td> 
        <td> {user.completedMeetings}</td> 
        <td> {user.rate}</td> 
        <td>
          <button
           onClick={() => handleDelete(user._id)}
           className="btn btn-danger">
            Delete
          </button>
        </td> 
      </tr>)
    })

    const handleDelete = (id) => {
      setUser(prevState => prevState.filter(user => { 
        return user._id !== id}))
    }

    return (
      <>
      {renderPhrase(users.length)}
      {users.length > 0 && 
      <table className="table">  
      <thead>
         <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th></th>
         </tr>
      </thead>
      <tbody>
         {res}
      </tbody>
   </table>}
      </>) 
}


export default Users





    


    
 



    