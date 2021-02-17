import React from "react";
import "../scss/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div id="footer-links" className="container">
        <ul id="navigation-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
        </ul>
        <ul id="category-links">
          <li>
            <a href="#">Anime</a>
          </li>
          <li>
            <a href="#">Manga</a>
          </li>
          <li>
            <a href="#">Characters</a>
          </li>
        </ul>
        <ul id="developer-links">
          <li>
            <a href="#">React Docs</a>
          </li>
          <li>
            <a href="#">Jikan</a>
          </li>
          <li>
            <a href="#">Sal</a>
          </li>
        </ul>
      </div>
      <div id="copyright-contact" className="container">
        <p>&copy;Crimson Heaven 2021</p>
        <ul id="contact-links">
          <li>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
