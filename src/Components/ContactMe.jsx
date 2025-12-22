import React, { useContext } from "react";
import "./ContactMe.css";
import { ModeContext } from "../Context/ModeContext";
import Mail from "../Static/Mail-Icon.png";
import Map from "../Static/Maps-Icon.png";

const ContactMe = (props) => {
  let ModeInfo = useContext(ModeContext);

  return (
    <section ref={props.innerref} className="c-container">
      <h4>Get in touch</h4>
      <h1 className="underline-effect-container">Contact Me</h1>

      <div className={`c-detail ${ModeInfo.isDark ? "dark-mode-c-div" : ""}`}>
        <div className="add-div">
          <a className="address-icons">
            <img src={Mail}></img>
          </a>
          <h4>GMail</h4>
          <a
            href="mailto:pranavgami2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            pranavgami2003@gmail.com
          </a>
        </div>
        <div className="add-div">
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
          <h4>Linkedin</h4>
          <a
            href="https://www.linkedin.com/in/pranav-gami-b67b56281/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pranav Gami
          </a>
        </div>
        <div className="add-div">
          <a className="address-icons">
            <img src={Map}></img>
          </a>
          <h4>Place</h4>
          <a href="">Ahmedabad , Gujarat</a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
