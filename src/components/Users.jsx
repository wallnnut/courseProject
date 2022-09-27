import React from "react";
import { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user"
import GroupList from "./groupList";
const Users = ({users, ...rest}) => {
  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (pageIndex) => { 
    setCurrentPage(pageIndex)
   }

const userCrop = paginate(users, currentPage, pageSize)   
  return (
    <>
    <GroupList />
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
          {userCrop.map(user => {
      return (<User key={user._id} user={user} onDelete={rest.onDelete} onChange={rest.OnToggle}> 
      </User >)
    })}
          </tbody>
        </table>
      )}
    
     <Pagination 
     itemsCount={count} 
     pageSize={pageSize} 
     onPageChange={handlePageChange}
     currentPage={currentPage} />
  </>
)
  
}


export default Users
