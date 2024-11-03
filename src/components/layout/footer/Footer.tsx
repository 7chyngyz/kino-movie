import React from "react";
import scss from "./Footer.module.scss";
import {
  FaDiscord,
  FaInstagram,
  FaVk,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy-Policy</li>
              <li>About</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
            <span>
              EcoMovie - a unique website providing fascinating information
              about movies and TV shows. Here you can discover all the <br />
              necessary details about your favorite films, actors, directors,
              ratings, and much more. EcoMovie boasts a stylish and intuitive
              <br /> interface that makes your search for cinematic masterpieces
              as convenient and enjoyable as possible.
            </span>
          </div>
          <div className={scss.social_icons}>
            <ul>
              <li>
                <a href="#">
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaVk />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
