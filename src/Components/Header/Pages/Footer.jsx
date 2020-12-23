import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img
          className="footer__img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
        <div className="footer__card1">
          <p>Get to know us</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Press Realse</p>
          <p>Gift</p>
        </div>
        <div className="footer__card2">
          <p>Conncet with us</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__card3">
          <p>Make money with us</p>
          <p>Sell on Amazon</p>
          <p>Become a Afflitate</p>
          <p>Fullfillment Amaon</p>
        </div>
      </div>
      <div className="footer__text">
        <p>@Sonu Sharma</p>
      </div>
    </>
  );
};

export default Footer;
