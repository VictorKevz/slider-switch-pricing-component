import React, { useState, useEffect } from "react";
import "./css/slider.css";

function Slider({ isToggled }) {
  const OriginalPrices = [8, 12, 16, 24, 36];
  const discountedPrices = [6, 9, 12, 18, 27];

  // State for slider index
  const [index, setIndex] = useState(2);

  // Effect to update slider index when toggle state changes
  useEffect(() => {
    setIndex(isToggled ? 2 : 2); // Setting the index to 2 to match default prices[2] = 16 and discountedPrices[2] = 12
  }, [isToggled]);

  // Handle slider index change
  const handleChange = (e) => {
    setIndex(parseInt(e.target.value, 10));
  };

  // Determine the current prices array based on toggle state
  const currentPrices = isToggled ? discountedPrices : OriginalPrices;
  const currentPrice = currentPrices[index];
  let pageViews;
  if (index === 0) pageViews = "10K pageviews";
  if (index === 1) pageViews = "50K pageviews";
  if (index === 2) pageViews = "100K pageviews";
  if (index === 3) pageViews = "50K pageviews";
  if (index === 4) pageViews = "1M pageviews";
  return (
    <div className="slider-container">
      <div className="slider-results-container">
        <p className="page-views">{pageViews}</p>
        <div className="slider-wrapper mobile">
        <input
          type="range"
          id="slider"
          value={index}
          min={0}
          max={currentPrices.length - 1}
          step={1}
          onChange={handleChange}
          className="slider mobile"
        />
        <label htmlFor="slider"></label>
      </div>
        <h2 className="price-num">
          {`$${currentPrice}.00 `}
          <span className="per-month"> / month</span>
        </h2>
      </div>
      <div className="slider-wrapper desktop">
        <input
          type="range"
          id="slider"
          value={index}
          min={0}
          max={currentPrices.length - 1}
          step={1}
          onChange={handleChange}
          className="slider desktop"
        />
        <label htmlFor="slider"></label>
      </div>
    </div>
  );
}

export default Slider;
