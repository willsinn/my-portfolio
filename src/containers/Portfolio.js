import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Social from "../components/Social";

const Portfolio = props => {
  return (
    <div className="portfolio">
      <About />
      <Experience />
      <Social />
    </div>
  );
};

export default Portfolio;
