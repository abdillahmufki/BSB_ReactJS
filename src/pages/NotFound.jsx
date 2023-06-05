import React from "react";
import image from "../assets/content/error.svg";
import { Button } from "../components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-[#fff] mt-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={image} className="mb-10" alt="error image" width={500} />
          <Link to="/">
            <Button text="Back to Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
