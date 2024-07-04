import React from "react";
import "./css/toggle.css";

function Toggle({onToggle, isToggled}) {
  return (
    <div className="toggle-wrapper">
        <p className={`toggle-text ${isToggled ? '':'green'}`}>Monthly <span className="conditional">Billing</span></p>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="toggle"
          className="toggle-input"
          onChange={onToggle}
          aria-label="Toggle Dark Mode"
        />
        <label htmlFor="toggle" className="toggle-label"></label>
      </div>
      <p className={`toggle-text ${isToggled ? 'green':''}`}>Yearly <span className="conditional">Billing</span></p>
      <p className="discount">25% <span className="conditional">discount</span></p>

      </div>
  );
}

export default Toggle;