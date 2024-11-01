import React from "react";
import './HomePageButton.css';
import ArrowPath from '../../images/homePage/Arrow.png';

function HomePageButton() {
  return (
    <div className="homePageButton__container">
      <img className="homePageButton__image" src={ArrowPath} alt="стрелка" />
      <p className="homePageButton__image__title">Просмотреть<br></br>все</p>
    </div>
  );
}

export default HomePageButton;




