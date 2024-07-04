import React from "react";
import "./css/header.css";

function Header() {
  return (
    <header className="header-container">
      
      <h1 className={`header-title`}>Simple, traffic-based pricing</h1>
      <p className={`header-paragraph`}>Sign-up for our 30-day trial. No credit card required. </p>
    </header>
  );
}

export default Header;