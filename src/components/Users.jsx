import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import User from './User'

const Users = () => {
    const [users,setUsers]=useState([]);
 
       
const fetchUsers= async (e)=>{
    e.preventDefault();
   const res=await axios.get("http://localhost:3000/users")
   setUsers(res.data)
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