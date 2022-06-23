import React from "react";
import "./Footer.css";
import logo from  "../../../Images/originalLogo.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="top_footer">
        <div className="left">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="footer_text">
              An online market where you can find all traditional wears of India
          </p>
        </div>
        <div className="right">
          <a href="#intsa">
            <BsInstagram className="footer_icon" />
          </a>
          <a href="#facebook">
            <BsFacebook className="footer_icon" />
          </a>
          <a href="#twitter">
            <BsTwitter className="footer_icon" />
          </a>
          <a href="#mail">
            <HiMail className="footer_icon" />
          </a>
        </div>
      </div>
      <div className="bottom_footer">
        <small>
          Copyright &copy; Trad-E-tional E-commerce. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
