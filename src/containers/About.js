import React from "react";
import AboutHeadline from "../components/AboutHeadline";
import AboutPhoto from "../components/AboutPhoto";

const About = props => {
  return (
    <div className="about">
      <AboutPhoto />
      <AboutHeadline />
    </div>
  );
};
export default About;
