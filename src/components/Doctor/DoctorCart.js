import React from "react";
import "./DoctorCart.css";
import {doctorDate} from "../../data";
import Buttons from "./Buttons";
export default function DoctorCart() {
    console.log(doctorDate)
  return (
    <>
      {doctorDate.map((item, index) => {
        const {
          image,
          name,
          specialty,
          degree,
          appointment,
          suggestion,
          viewDetails,
        } = item;
        return (
          <div className="doctor-cart-inner" key={index}>
            <div className="doctor-img">
              <img src={image} alt="doctor-img" />
            </div>
            <div className="doctor-author">
              <div className="doctor-item">
                <span>
                  <strong>Name:</strong> {name}
                </span>
                <p>
                  <strong>Specialty:</strong>
                  {specialty}
                </p>
                <p>
                  <strong>Degree:</strong> {degree}
                </p>
              </div>
              <div className="doctor-item">
                <Buttons
                  value={appointment}
                  sx={{ fontSize: "0.7rem" }}
                  variant="contained"
                />
                <Buttons
                  value={suggestion}
                  sx={{ fontSize: "0.7rem" }}
                  variant="contained"
                />
                <Buttons
                  value={viewDetails}
                  sx={{ fontSize: "0.7rem" }}
                  variant="contained"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
