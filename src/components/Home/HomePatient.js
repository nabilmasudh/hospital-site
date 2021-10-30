import React from "react";
import { careAmenities } from "../../data";
import "./HomePatient.css";
import image from "../../assets/img/Finest-Patient.jpg";

const HomePatient = () => {
  return (
    <section className="margin-section">
      <div className="homePatient-center" id="container">
        <div className="care-amenities">
          <p>Finest Patient</p>
          <h2>Care & Amenities</h2>
          {careAmenities.map((item, index) => {
            const { icon, text } = item;
            return (
              <div className="care-amenities-center" key={index}>
                <div>{icon}</div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className="homePatient-photos">
          <img src={image} alt="Care and Amenities photos" />
        </div>
      </div>
    </section>
  );
};

export default HomePatient;
