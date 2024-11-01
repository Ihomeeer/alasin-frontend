import React from "react";
import './HomePageLessons.css';
import { testLessonsCards } from "../../utils/TestData";
import HomePageLessonsCard from "../HomePageLessonsCard/HomePageLessonsCard";
import HomePageButton from "../HomePageButton/HomePageButton";

function HomePageLessons() {

  return (
    <section className="homePageLessons__container">
      <h2 className="homePageLessons__title">
        Ваши уроки
      </h2>
      <ul className="homePageLessons__list">
        {
          testLessonsCards.map((lesson) => {
            return (
              <li className="homePageLessons__card" key={lesson.id}>
                <HomePageLessonsCard
                  item={lesson}
                />
              </li>
            )
          })
        }
        <HomePageButton />
      </ul>
    </section>
  );
}

export default HomePageLessons;