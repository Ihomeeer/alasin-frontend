import React from "react";
import './HomePageProgressBar.css';


function HomePageProgressBar({ value, max }) {
  return (
    <div className="homePageProgressBar__container">
      <div className="homePageProgressBar__complete" style={{ width: `${(value / max) * 102}%` }}></div>
      <p className="homePageProgressBar__percentage">{value}%</p>
    </div>
  );
}

export default HomePageProgressBar;