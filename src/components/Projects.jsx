import React from "react";

import { projects } from "../data/projectsData";

function Projects() {
  return (
    <div name="Projects" className="section projectsSection">
      <div className="title">
        <span className="text">Projects</span>
      </div>
      <div className="introText">
        <span className="text">
          Although I’m primarily a back-end developer well-versed in Python and
          C/C++, I love to develop applications on the front-end side with
          React, a JavaScript framework. Because of this, my projects range from
          one end of the technology stack all the way to the other.
        </span>
      </div>
      <div className="projectsGrid">
        {projects.map((proj) => {
          return (
            <div className="projectCard" key={proj.name}>
              <div className="topRow">
                <span className="title">{proj.name}</span>
              </div>
              <div className="bottomRow">
                {proj.stack.map((tech) => {
                  return (
                    <div className="tech">
                      <div className="caption">
                        <span className="name">{tech.name}</span>
                      </div>
                      <img src={tech.logo} alt={tech.logo} className="logo" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
