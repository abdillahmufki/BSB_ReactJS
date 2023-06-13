import React from "react";
import HeroAbout from "./About/HeroAbout";
import AboutSince from "./About/AboutSince";
const About = () => {
  return (
    <div className="lg:mt-[130px] max-[728px]:mt-16">
      <HeroAbout />
      <AboutSince />
    </div>
  );
};

export default About;
