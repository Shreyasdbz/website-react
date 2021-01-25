import React from "react";

import { workExp, languages, technologies } from "../data/aboutData";

function About() {
  return (
    <div name="About" className="section aboutSection">
      <div className="title">
        <span className="text">About me</span>
      </div>
      <div className="introText">
        <span className="text">
          I graduated from Pennsylvania State University in the spring of 2019
          with a B.S. in Computer Engineering. Since then, I’ve been working as
          a software engineer over at Lockheed Martin. When I’m not working on
          some cool fighter jet simulations, I like to take photos of people and
          places. Oh and play soccer. Tons of it.
        </span>
      </div>
      <div className="work">
        <div className="workIntro">
          <span>Here's couple of the companies I have worked with so far.</span>
        </div>
        <div className="workGrid">
          {workExp.map((work) => {
            return (
              <div className={"workCard " + work.cssClass} key={work.company}>
                <div className="topRow">
                  <div className="iconSide">
                    <img
                      src={work.logo}
                      alt="lockheedLogo"
                      className="workLogo"
                    />
                  </div>
                  <div className="textSide">
                    <span className="companyName">{work.company}</span>
                    <span className="position">{work.position}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skills">
        <div className="skillsIntro">
          <span>And some skills I've picked up during that.</span>
        </div>
        <div className="skillsRow">
          <div className="label">
            <span className="text">Languages:</span>
          </div>
          <div className="skillsContainer">
            {languages.map((lang) => {
              return (
                <div className="logoContainer">
                  <div className="caption">
                    <span className="text">{lang.name}</span>
                  </div>
                  <img
                    src={lang.logo}
                    alt={lang.name}
                    key={lang.name}
                    className="logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="skillsRow">
          <div className="label">
            <span className="text">Technologies:</span>
          </div>
          <div className="skillsContainer">
            {technologies.map((lang) => {
              return (
                <div className="logoContainer">
                  <div className="caption">
                    <span className="text">{lang.name}</span>
                  </div>
                  <img
                    src={lang.logo}
                    alt={lang.name}
                    key={lang.name}
                    className="logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
