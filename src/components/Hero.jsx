import React from "react";

function Hero() {
  return (
    <div name="Hero" className="section">
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
              <span className="btnText">CODE</span>
            </div>
            <div className="normalText">applications</div>
          </div>
          <div className="line">
            <div className="normalText">and</div>
            <div className="actionButton captureBtn">
              <span className="btnText">CAPTURE</span>
            </div>
            <div className="normalText">adventures</div>
          </div>
        </div>
      </div>
      <div className="imageSection">
        <img src="/me.JPG" alt="profilePic" className="profilePic" />
      </div>
    </div>
  );
}

export default Hero;
