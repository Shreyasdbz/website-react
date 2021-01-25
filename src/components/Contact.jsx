import React from "react";

import { socialLinks } from "../data/contactData";

function Contact() {
  return (
    <div className="section contactSection">
      <div className="intro">
        <span className="text">
          Lastly, I'm reachable on all these platforms :)
        </span>
      </div>
      <div className="socialLinks">
        {socialLinks.map((lk) => {
          return (
            <a
              key={lk.name}
              href={lk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <img src={lk.logo.src} alt={lk.logo.alt} className="linkIcon" />
              <div className="caption">
                <span className="text">{lk.name}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
