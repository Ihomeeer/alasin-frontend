import React from "react";
import './HomePageLessonsCard.scss';
import HomePageProgressBar from "../HomePageProgressBar/HomePageProgressBar";

function HomePageLessonsCard({ item }) {

  return (
    <div className="homePageLessonsCard__container">
      <img className="homePageLessonsCard__image" src={item.imageLink} alt="изображение урока" />
      <p className="homePageLessonsCard__title">
        {item.title}
      </p>
      <HomePageProgressBar
        value={item.progressBar}
        max={100}
      />
    </div>
  );
}

export default HomePageLessonsCard;