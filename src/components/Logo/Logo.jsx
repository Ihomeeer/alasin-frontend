import React from "react";
import './Logo.scss';

function Logo({ logoPath }) {
  return (
    <a className="logo__link" href="/">
      <img className="logo" src={logoPath} alt="лого проекта" />
    </a>
  );
}

export default Logo;