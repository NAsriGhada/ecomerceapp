import React from "react";
import "./navbar.css";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <img
        src="https://www.actia.com/media/zoo/images/Afrique-Tunisie_75c449a7a73a82a2862bc9b28b570f3e.jpg"
        alt=""
        className="logo"
        width="40"
        height="40"
      />
      <div className={show ? "navItems" : "navItems1"}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="bar">
        <i className="fa-solid fa-bars" onClick={() => setShow(!show)}></i>
      </div>
    </div>
  );
};

export default NavBar;
