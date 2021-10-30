import React from 'react'
import Form from "../Form";
import DoctorCart from '../DoctorCart';
import "./Doctor.css";


export default function FindDoctor() {
    return (
      <section className="margin-section">
        <div className="find-doctor-center" id="container">
          <div className="doctor-form">
            <Form />
          </div>
          <div className="doctor-cart">
            <DoctorCart />
          </div>
        </div>
      </section>
    );
}
