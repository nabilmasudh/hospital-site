import React from 'react'
import { FaAmbulance, FaCcAmazonPay } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { SiTimescale } from "react-icons/si";
import "./HomeList.css";

function HomeList() {
    return (
      <section className="home-section">
        <div className="home-mini-cart-center" id="container">
          <div className="home-mini-cart">
            <div>
              <FaAmbulance />
            </div>
            <p>24 HOURS SERVICE</p>
          </div>
          <div className="home-mini-cart">
            <div>
              <SiTimescale />
            </div>
            <p>ONLINE APPOINTMENT</p>
          </div>
          <div className="home-mini-cart">
            <div>
              <FaCcAmazonPay />
            </div>
            <p>ONLINE PAYMENT</p>
          </div>
          <div className="home-mini-cart">
            <div>
              <BsPersonCircle />
            </div>
            <p>YOUR PHYSICIANS</p>
          </div>
        </div>
      </section>
    );
}

export default HomeList
