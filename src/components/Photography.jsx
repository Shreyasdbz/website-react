import React from "react";

import PhotoGrid from "./PhotoGrid";

function Photography() {
  return (
    <div name="Photography" className="section photographySection">
      <div className="title">
        <span className="text">Photography</span>
      </div>
      <div className="introText">
        <span className="text">
          Traveling to different countries and places was probably what prompted
          me to pick up a camera and capture that place in the best way
          possible. With the rise of Instagram, I got more and more into
          portraits and recently started delving into videos.
        </span>
      </div>
      <PhotoGrid />
      <div className="platform">
        <div className="intro">
          <span className="text">
            I primarily post all my photos and short vidoes on Instagram so
            check em out here:
          </span>
        </div>
        <a
          href="https://www.instagram.com/itShreyas"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <div className="insta">
            <span className="text">@itShreyas</span>
          </div>
        </a>
      </div>
      <div className="platform">
        <div className="intro">
          <span className="text">
            I also make cinematic videos for Youtube:
          </span>
        </div>
        <a
          href="https://www.youtube.com/shreyasdbz"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <div className="youtube">
            <span className="text">@itShreyas</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Photography;
