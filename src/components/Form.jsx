import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);


         
const addUser= async (e)=>{
    e.preventDefault();
   await axios.post("http://localhost:3000/users/create",{
        name,password,email,age
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
    </form>
  );
};

export default Form;
