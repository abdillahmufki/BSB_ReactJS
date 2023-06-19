import React, { useState, useEffect } from "react";
import logo from "../assets/logo/bsbBlue.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setShowNavbar(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`navbar bg-white text-black px-5 py-4 z-50 text-lg fixed top-0 w-full transition-all duration-300 ${
        showNavbar ? "" : "-translate-y-full"
      } ${showNavbar ? "shadow-sm" : ""}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-base dropdown-content mt-3 p-2 shadow bg-[#000] text-white z-50 rounded-box w-52"
          >
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/about">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/products">Produk</Link>
            </li>
            <li>
              <Link to="https://digitalcv.id/bsb/">Karir</Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <img src={logo} alt="logo" width={100} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/about">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/products">Produk</Link>
          </li>
          <li>
            <Link to="https://digitalcv.id/bsb/">Karir</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact">
          <Button>Kontak Kami</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
