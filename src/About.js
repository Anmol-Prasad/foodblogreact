import React from "react";
import drug from "./Images/drug.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="abtcont">
        <div className="abtimg">
          <img src={drug} alt="" />
        </div>
        <div className="abtcontent">
          <p className="abttitle">About Us</p>
          <p className="abttext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button className="abtbtn">Read More</button>
        </div>
      </div>
    </>
  );
};

export default About;
