import React from "react";
import Hero from "../components/Hero";
import { Banner } from "../components";
import HomeProduct from "./Home/HomeProduct";

const Home = () => {
  return (
    <div className="mt-[90px]">
      <Hero />
      <Banner />
      <HomeProduct />
    </div>
  );
};

export default Home;
