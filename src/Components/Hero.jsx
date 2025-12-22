import React, { useContext } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ModeContext } from "../Context/ModeContext";
// import leetcode from "../Static/leetcodeIcon.png";
// import codeforces from "../Static/CodeforcesIcon.png";

const Hero = (props) => {
  let ModeInfo = useContext(ModeContext);

  return (
    <div className="h-container animate">
      <div className="h-picture"></div>

      <div className="h-desc animate">
        <h3>Hello , I'm</h3>
        <h1>Pranav Gami</h1>
        <h2>Full Stack Web-Developer</h2>
        <div
          className={`desc-detail ${ModeInfo.isDark ? "Darkdesc-detail" : ""}`}
        >
          <a
            href="https://drive.google.com/drive/folders/1blQiRzpmgESY2iEnPWtV3Gug8IlOHfzr?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ borderColor: ModeInfo.isDark ? "#E0E0E0" : "black" }}>
              Resume
            </div>
          </a>
          <div
            onClick={() => props.scrollToSection(props.innerref)}
            style={{ borderColor: ModeInfo.isDark ? "#E0E0E0" : "black" }}
          >
            Contact Info
          </div>
        </div>
        <div className="h-logos">
          <a
            href="https://github.com/Pranavgami"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ModeInfo.isDark ? "white" : "black" }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-gami-b67b56281/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ModeInfo.isDark ? "white" : "black" }}
          >
            {" "}
            <i
              style={{ fontSize: "2rem" }}
              class="devicon-linkedin-plain colored"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
