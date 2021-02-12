import React from "react";
import "../scss/Header.scss";
import Logo from "../images/logo.svg";

function Header() {
  const handleBurgerButton = (event) => {
    const [top, middle, bottom] = document.querySelectorAll(".burger-line");
    const sideNav = document.getElementById("side-nav");

    if (sideNav.classList.contains("shown")) {
      sideNav.classList.remove("shown");
      sideNav.classList.add("hidden");
      top.style.transform = "initial";
      bottom.style.transform = "initial";
      middle.style.opacity = "initial";
    } else {
      sideNav.classList.remove("hidden");
      sideNav.classList.add("shown");
      top.style.transform = "rotate(45deg) translate(10px, 5px)";
      bottom.style.transform = "rotate(-45deg) translate(11px, -6.5px)";
      middle.style.opacity = 0;
    }
  };
  return (
    <header>
      <div className="container">
        <div id="branding">
          <img src={Logo} />
        </div>
        <ul id="banner-navigation-links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">categories</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">donate</a>
          </li>
        </ul>
        <div className="burger-button" onClick={handleBurgerButton}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
      <div id="side-nav" className="hidden">
        <ul className="side-nav-links">
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">categories</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">donate</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
