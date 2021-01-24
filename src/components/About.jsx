import React from "react";

function About() {
  const workExp = [
    {
      company: "Lockheed Martin",
      cssClass: "work-lockheed",
      location: "Fort Worth, TX",
      position: "Software Engineer",
      timeline: "2019 - Present",
      logo: "lockheedLogo.png",
      description:
        "Supported mission critical simulation software development in Python, C & C# applications for the F-16 & F-35. My roles included integrating AI tools to increase efficiency of computer vision algorithms as well as working at the firmware level on communication architecture to enhance simulation capabilities.",
    },
    {
      company: "UPS",
      cssClass: "work-ups",
      location: "Scranton, PA",
      position: "Software Engineering Intern",
      timeline: "Summer 2018",
      logo: "lockheedLogo.png",
      description:
        "Led the effort of modernizing the front-end for internal .NET revenue allocation applications to accommodate for responsiveness and up-to-date UI design. Also worked on various PL/SQL queries to increase efficiency for large scale data operations.",
    },
    {
      company: "Synchronoss Technologies Inc",
      cssClass: "work-synchronoss",
      location: "Bethlehem, PA",
      position: "Software Engineering Intern",
      timeline: "Summer 2016",
      logo: "lockheedLogo.png",
      description:
        "Picked up valuable software as well as workplace skills while learning to develop server side Java applications on the Apache web framework for the company’s various clients.",
    },
    {
      company: "Penn State University",
      cssClass: "work-psu",
      location: "Erie, PA",
      position: "IT Help Desk Specialist",
      timeline: "Fall 2016",
      logo: "lockheedLogo.png",
      description:
        "Served as a Tech Help Desk specialist for the university’s technology center assisting students and faculty with computer related issues. Other responsibilities included maintaining the tech center website and researching products for educational use.",
    },
    {
      company: "Penn State University",
      cssClass: "work-psu-fb",
      location: "State College, PA",
      position: "PSU Football Photographer",
      timeline: "Spring 2019",
      logo: "lockheedLogo.png",
      description:
        "Served as a Tech Help Desk specialist for the university’s technology center assisting students and faculty with computer related issues. Other responsibilities included maintaining the tech center website and researching products for educational use.",
    },
  ];

  return (
    <div name="About" className="section aboutSection">
      <div className="title">
        <span className="text">About me</span>
      </div>
      <div className="introText">
        <span className="text">
          I’m currently a software engineer over at Lockheed Martin Aeronautics
          in Fort Worth, TX. When I’m not working on some cool fighter jet
          simulations, I like to take photos of people and places. Oh and play
          soccer. Tons of it.
        </span>
      </div>
      <div className="work">
        <div className="workIntro">
          <span>All my work experience:</span>
        </div>
        <div className="workGrid">
          {workExp.map((work) => {
            return (
              <div className="workCard lockheed" key={work.company}>
                <div className="topRow">
                  <div className="iconSide">
                    <img
                      src="lockheedLogo.png"
                      alt="lockheedLogo"
                      className="workLogo"
                    />
                  </div>
                  <div className="textSide">
                    <span className="companyName">{work.company}</span>
                    <span className="position">{work.position}</span>
                  </div>
                </div>
                <div className="workCardDivider" />
                <div className="bottomRow">
                  <span className="text">
                    I joined Lockheed Martin right after graduating
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
