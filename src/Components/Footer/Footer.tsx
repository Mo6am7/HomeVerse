import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="f-wrapper">
      <section className="flexCenter paddings innerWidth f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            The Vision is Make All People
            <br />
            The Best Place To Live For Them
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New YorK , FL 4571 , USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
