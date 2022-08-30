import React, { useState } from "react";

const Form = ({user}) => {
  console.log(user,"form")

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);


         
const addUser= async (e)=>{
    e.preventDefault();
   await fetch("http://localhost:3000/users/create",{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        name,password,email,age
        })
})
   
}

  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
              className="form-control"
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
              className="form-control"
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
              className="form-control"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary" onClick={addUser}>Submit</button>

      <div>{user?.email}</div>
    </form>
  );
};

export default Form;
