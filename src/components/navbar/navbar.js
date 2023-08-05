import React, { useState } from 'react';
import './navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-left">
        <div className="company-logo"><img src="https://i.ibb.co/jTtVjwB/logo.png" alt="logo" border="0"/></div>
        <div className="search-bar">
        <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="collections, item or user"
          />
        </div>
      </div>
      <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
      <div className="navbar-right">
      <div className="navbar">
  <a href="#home">Home</a>
  <div className="dropdown">
    <button className="dropbtn">Explore
      <i className="fa fa-angle-down"></i>
    </button>
    <div className="dropdown-content">
    </div>
  </div>
  <div className="dropdown">
    <button className="dropbtn">Create
      <i className="fa fa-angle-down"></i>
    </button>
    <div className="dropdown-content">
    </div>
  </div>
  <div className="dropdown">
    <button className="dropbtn">Blog
      <i className="fa fa-angle-down"></i>
    </button>
    <div className="dropdown-content">
    </div>
  </div>
  <a href="#home">contact</a>
</div> 
<input type="checkbox" id="checkbox" onClick={toggleDarkMode} />
        <div >
   <img className="profile-pic" src="https://i.ibb.co/vQSxqvQ/profile.png" alt="profile"/>
        </div>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
