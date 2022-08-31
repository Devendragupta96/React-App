import React from "react";

class User extends React.Component{
  constructor({user,i}){
    super({user,i});
    this.user=user;
    this.i=i;
    console.log(user)
  }
 

 async deleteUser(e) {
  e.preventdefault();
  await fetch(`http://localhost:3000/users/${this.user._id}`,{method:'DELETE'})
}

  render(){
    return(
      <div>
            <h1>{(this.i)+1}</h1>
            <p>{this.user?.email} </p>
            <p>{this.user?.password} </p>
            <p>{this.user?.name} </p>
            <p>{this.user?.age} </p>
            <button className="btn btn-danger" onClick={this.deleteUser}>Delete</button>
            {/* <button className="btn btn-danger" onClick={deleteUser}>Delete</button> */}
      
      </div>
    );

  }
}





// import React from 'react'

// const User = ({user,i}) => {

         
// const deleteUser= async (e)=>{
//   //e.preventDefault();
//   await fetch(`http://localhost:3000/users/${user._id}`,{method:'DELETE'})
 
// }


//   return (
//     <div>
//       <h1>{i+1}</h1>
//       <p>{user?.email} </p>
//       <p>{user?.password} </p>
//       <p>{user?.name} </p>
//       <p>{user?.age} </p>
//       <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
//       {/* <button className="btn btn-danger" onClick={deleteUser}>Delete</button> */}

//     </div>
//   )
// }

export default User
