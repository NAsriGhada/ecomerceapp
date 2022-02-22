import React from 'react'
import  "./navbar.css"
const NavBar = () => {
  return (
   <div className='navbar'>
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/brosse-logo-vector-design-illustration-de-la-tunisie-134958505.jpg" alt="" width="100" height="100"/>
      </div>
      <div>
      <div className="search-container">
    <form >
      <input className='input' type="text" placeholder="Search.." name="search"/>
      <button className='button' type="submit"><i className="fa fa-search"></i></button>
    </form>
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