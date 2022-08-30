import React from 'react'

const User = ({user,i}) => {

         
const deleteUser= async (e)=>{
  //e.preventDefault();
  await fetch(`http://localhost:3000/users/${user._id}`,{method:'DELETE'})
 
}


  return (
    <div>
      <h1>{i+1}</h1>
      <p>{user?.email} </p>
      <p>{user?.password} </p>
      <p>{user?.name} </p>

      <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
      {/* <button className="btn btn-danger" onClick={deleteUser}>Delete</button> */}

    </div>
  )
}

export default User
