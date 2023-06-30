import React, { useEffect, useState } from "react";
import image from "../assets/content/404.gif";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, countdown * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [countdown, navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [countdown]);

  return (
    <div className="hero mt-14 min-h-screen bg-[#fff]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={image} className="mb-10" alt="error image" width={500} />
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": countdown }}></span> Detik
          </span>
          <div className="my-3">
            <h1 className="mb-5 text-3xl font-bold">
              Untuk Kembali Ke Beranda
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
