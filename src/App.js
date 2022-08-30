import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import Users from "./components/Users";

function App() {
  const [user,setUser]=useState(null);

  console.log(user,"app")

  return (
    <>
      <Navbar title="React" setUser={setUser}  />
      <div className="container">
        <Form user={user}/>
        <Users/>
      </div>
    </>
  );
}

export default App;
