import React from "react";
import "../css/Header.css";
import BlinkingBanner from './BlinkingBanner'

function Header() {
  return (
    <header className="header">
    <div className="d-flex align-items-center justify-content-between">
    <div className="logo">
      <div>
      <img src="./src/assets/images/logo.png" alt="logo"></img>
      </div>
      <BlinkingBanner text="VROOM VROOOOOOOOMMM! Explore your dream cars!" />
      <div>
      <h2 className="text-warning">c4car<span className="text-danger">Z</span></h2>
      </div>
    </div>
  </div>
  
  
    </header>
  );
}

export default Header;
