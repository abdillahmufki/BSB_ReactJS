import React from "react";
import logo from "../assets/logo/bsbWhite.png";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <div>
          <img src={logo} width={180} alt="logo" className="lg:mt-10" />
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/products" className="link link-hover">
            Products
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/about" className="link link-hover">
            About us
          </a>
          <a href="/contact" className="link link-hover">
            Contact
          </a>
          <a href="https://digitalcv.id/bsb/" className="link link-hover">
            Careers
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="*" className="link link-hover">
            Terms of use
          </a>
          <a href="*" className="link link-hover">
            Privacy policy
          </a>
          <a href="*" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
      <footer className="footer bg-neutral text-neutral-content flex justify-center p-10">
        <p className="text-center">
          Copyright © 2023 PT. Buana Selaras Berjaya. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
