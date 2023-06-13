import React from "react";
import logo from "../assets/logo/bsbWhite.png";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img src={logo} width={180} alt="logo" className="lg:mt-10" />
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer p-10 bg-neutral text-neutral-content flex justify-center">
        <p className="text-center">
          Copyright © 2023 Gestalt Systech. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
