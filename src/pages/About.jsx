import React from "react";
import HeroAbout from "./About/HeroAbout";
import AboutSince from "./About/AboutSince";
import AboutContact from "./About/AboutContact";
const About = () => {
  return (
    <div className="max-[728px]:mt-16 lg:mt-[80px]">
      <HeroAbout />
      <AboutSince />
      <AboutContact />
    </div>
  );
};

export default About;
