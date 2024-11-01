import React from "react";
import './HomePageLessonsCard.css';
import { testUsers } from "../../utils/TestData";

function HomePageLessonsCard({ item }) {

  return (
    <div className="homePageLessonsCard__container">
      <img className="homePageLessonsCard__image" src={item.imageLink} alt="изображение урока" />
      <p className="homePageLessonsCard__title">
        {item.title}
      </p>
    </div>
  );
}

export default HomePageLessonsCard;