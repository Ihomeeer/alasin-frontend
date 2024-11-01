import React from "react";
import HomePageProfile from "../HomePageProfile/HomePageProfile";
import HomePageLessons from "../HomePageLessons/HomePageLessons";
import LogoPath from '../../images/homePage/Logo.png'
import './HomePage.css';

function HomePage() {
    return (
      <div className="homepage">
        <div className="homepage__profile">
          <HomePageProfile />
        </div>
        <h1 className="homepage__learnToday">Что будете учить сегодня?</h1>
        <HomePageLessons />
        <img className="homepage__logo" src={LogoPath} alt="лого" />
      </div>
    );
}

export default HomePage;