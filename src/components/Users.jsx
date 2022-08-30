import React, { useState } from 'react'
import User from './User'

const Users = () => {
    const [users,setUsers]=useState([]);
 
       
const fetchUsers= async (e)=>{
    e.preventDefault();
   const res=await fetch("http://localhost:3000/users")
   setUsers(await res.json())
}

  return (
    <div>
        <button className="btn btn-primary" onClick={fetchUsers}>Show</button>
          {
            users.map( (user,index)=><User user={user} i={index}  />)
          }

    </div>
  )
}

export default Users