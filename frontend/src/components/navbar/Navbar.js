import React from "react";
import "./navbar.css";
import { useState } from "react";

const NavBar = () => {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 0);
  });

  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <img
        src="/images/logo.png"
        alt=""
        className="logo"
        width="200"
        height="40"
      />
      <div className={show ? "navItems" : "navItems1"}>
        <a href="/#">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="bar">
        <i className="fa-solid fa-bars" onClick={() => setShow(!show)}></i>
      </div>
    </div>
  );
};

export default NavBar;
