import React from "react";
import AboutResume from "../components/AboutResume";
import AboutHeadline from "../components/AboutHeadline";
import AboutPhoto from "../components/AboutPhoto";

const About = props => {
  return (
    <div className="about">
      <AboutPhoto />
      <AboutHeadline />
      <AboutResume />
    </div>
  );
};
export default About;
