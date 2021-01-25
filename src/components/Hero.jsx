import React from "react";
import { Link } from "react-scroll";

import { BsPlayFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";

function Hero() {
  return (
    <div name="Hero" className="section heroSection">
      <div className="textSection">
        <div className="landingText">
          <span className="normal">Hi there!</span>
          <br />
          <span className="name">I'm Shreyas</span>
        </div>
        <div className="descText">
          <div className="line">
            <div className="normalText">I</div>
            <div className="actionButton codeBtn">
              <Link to="Projects" smooth={true} duration={750}>
                <span className="btnText">
                  CODE <BsCodeSlash className="icon" />
                </span>
              </Link>
            </div>
            <div className="normalText">applications</div>
          </div>
          <div className="line">
            <div className="normalText">and</div>
            <div className="actionButton captureBtn">
              <Link to="Photography" smooth={true} duration={750}>
                <span className="btnText">
                  CAPTURE <BsCamera className="icon" />
                </span>
              </Link>
            </div>
            <div className="normalText">adventures</div>
          </div>
        </div>
        <div className="aboutText">
          <span className="normal">Here's some stuff </span>
          <span className="aboutLink">
            <Link to="About" smooth={true} duration={750}>
              <span className="about">about me</span>
              <BsPlayFill className="icon" color={"b9b6d4"} />
            </Link>
          </span>
        </div>
      </div>
      <div className="imageSection">
        <img src="/me.JPG" alt="profilePic" className="profilePic" />
      </div>
    </div>
  );
}

export default Hero;
