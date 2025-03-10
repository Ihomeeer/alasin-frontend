import React from "react";
import HomePageProfile from "../HomePageProfile/HomePageProfile";
import HomePageLessons from "../HomePageLessons/HomePageLessons";
import logoPath from '../../images/homePage/Logo.png';
import Logo from "../Logo/Logo";
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__profile">
        <HomePageProfile />
      </div>
      <h1 className="homepage__learnToday">Что будете учить сегодня?</h1>
      <HomePageLessons />
      <Logo
        logoPath={logoPath}>
      </Logo>
    </div>
  );
}

export default HomePage;