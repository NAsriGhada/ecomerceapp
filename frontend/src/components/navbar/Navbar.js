import React from 'react'
import  "./navbar.css"
// import {logoo} from "./brosse-logo-vector-design-illustration-de-la-tunisie-134958505-removebg-preview.png"
const NavBar = () => {
  return (
   <div className='navbar'>
      <div className="logo">
{/* <img src={logoo} alt="" width="100" height="100"/> */}
        <img src="https://thumbs.dreamstime.com/b/brosse-logo-vector-design-illustration-de-la-tunisie-134958505.jpg" alt="" width="50" height="50"/>
      </div>
      <div>
      <div className="search-box">
        <button className="btn-search"><i className="fas fa-search" /></button>
        <input type="text" className="input-search" placeholder="Type to Search..." />
      </div>
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
   </div>

  )
}

export default NavBar