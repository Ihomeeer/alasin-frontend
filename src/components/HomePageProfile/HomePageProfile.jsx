import React from "react";
import './HomePageProfile.scss';
import { testUsers } from "../../utils/TestData";

function HomePageProfile() {
const currentUser = testUsers[0];

    return (
        <section className="homePageProfile__container">
          <img className="homePageProfile__avatar" src={currentUser.avatarLink} alt="Аватар профиля"/>
          <p className="homePageProfile__greeting">
            Привет, {currentUser.name}!
          </p>
        </section>
    );
}

export default HomePageProfile;