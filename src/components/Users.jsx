import React, { useState } from 'react'
import User from './User'

const Users = () => {
   const [users,setUsers]=useState([]); 
   const [userByName,setUsersbyname]=useState([]);

    const [user,setUser]=useState();
    const [_id,setId]=useState();
    const [name,setName]=useState("");
       
const fetchUsers= async (e)=>{
    e.preventDefault();
   const res=await fetch("http://localhost:3000/users")
   setUsers(await res.json())
}
const fetchUserByName= async (e)=>{
  e.preventDefault();
 const res=await fetch("http://localhost:3000/users")
 setUsersbyname(await res.json())
}
const fetchUser= async (e)=>{
  e.preventDefault();
 const res=await fetch(`http://localhost:3000/users/${_id}`)
 setUser(await res.json())
}
console.log(userByName)
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="search your id"
        value={_id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn btn-primary" onClick={fetchUser}>ShowByID</button>
        <button className="btn btn-primary" onClick={fetchUsers}>ShowAll</button>
        {
            users.map( (user,index)=><User user={user} i={index}  />)
        }
        <input
        className="form-control"
        type="text"
        placeholder="search by name"
        value={name}
        onChange={(e) =>setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={fetchUserByName}>ShowByName</button>
      {userByName.map(data=>{
        return (<>{data.name === name ? 
                        <div className="table">
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                          </tr>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.age}</td>
                          </tr>
                        </table>
                      {/* <p>{data.name}</p>
                      <p>{data.age}</p>
                      <p>{data.email}</p>  */}
                      </div>: ''}</>
        )
      })}
      <p> {user?.email}</p>  
      <p> {user?.name}</p> 
      <p> {user?.age}</p>   
      
    </div>
  )
}

export default Users