import React, { useState } from 'react'
import PropTypes from 'prop-types'
import User from './User';

export default function Navbar(props) {
  const [user,setUser]=useState([]);
  const [_id,setId]=useState("");
 
       
const fetchUser= async (e)=>{
    e.preventDefault();
   const res=await fetch(`http://localhost:3000/users/${_id}`)
   setUser(await res.json())
}

    let array=['Action','Another action','Something else here'];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            {array && array.map(arr =>{
              return (
              <li key={arr}><a className="dropdown-item" href="/">{arr}</a></li>

              )
            })}
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" value= {_id} placeholder="Search your Id" aria-label="Search" onChange={(e) => setId(e.target.value)}></input>
        <button className="btn btn-outline-success" type="submit" onClick={fetchUser}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired

}
Navbar.defaultProps={
    title:"ReactD"
}
