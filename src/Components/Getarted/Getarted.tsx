import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Getarted.css";
const Getarted = () => {
  return (
    <section className="g-wapper">
      <div className="innerWidth paddings h-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">
            Subscribe and Find Super Attractive From US
            <br />
            Find Your Residence Soon
          </span>
          <div className="container-button">
            <div className="hover bt-1"></div>
            <div className="hover bt-2"></div>
            <div className="hover bt-3"></div>
            <div className="hover bt-4"></div>
            <div className="hover bt-5"></div>
            <div className="hover bt-6"></div>
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getarted;
