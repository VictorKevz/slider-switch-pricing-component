import React, { useState } from "react";
import "./css/card.css";
import Slider from "./Slider";
import Toggle from "./Toggle";
import checkIcon from "../assets/images/icon-check.svg";

function Card() {
  const [isToggled, setToggle] = useState(false);
  function switchPrices() {
    setToggle(!isToggled);
  }
  return (
    <div className={`card-container`}>
      <Slider isToggled={isToggled} />
      <Toggle isToggled={isToggled} onToggle={switchPrices} />
      <div className="features-CTA-container">
        <ul className="feature-icon-container">
          <li className="feature">
            <img src={checkIcon} alt="check icon" className="check-icon" />
            Unlimited websites
          </li>
          <li className="feature">
            <img src={checkIcon} alt="check icon" className="check-icon" /> 100%
            data ownership
          </li>
          <li className="feature">
            <img src={checkIcon} alt="check icon" className="check-icon" />{" "}
            Email reports
          </li>
        </ul>
        <a className="CTA">Start my trial</a>
      </div>
    </div>
  );
}

export default Card;
