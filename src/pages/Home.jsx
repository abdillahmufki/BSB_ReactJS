import React from "react";
import Hero from "../components/Hero";
import HomeProduct from "./Home/HomeProduct";
import ChooseMe from "./Home/ChooseMe";
import BrandSection from "./Home/BrandSection";
import AboutBsb from "./Home/AboutBsb";

const Home = () => {
  return (
    <div className="mt-[90px]">
      <Hero />
      <AboutBsb />
      <ChooseMe />
      <BrandSection />
      <HomeProduct />
    </div>
  );
};

export default Home;
