import React, { useEffect } from "react";
import image from "../assets/content/404.gif";
import { Button } from "../components";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="hero mt-14 min-h-screen bg-[#fff]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={image} className="mb-10" alt="error image" width={500} />
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
