import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#home">Logo</a>
        <div className="navbar-menu">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#menu">Menu</a>
          <a className="nav-link" href="#about-us">About Us</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="reserve-btn" href="#reserve">Reserve Table</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
