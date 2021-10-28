import React from 'react'
import "./HomeLaboratory.css";
import { BsList } from "react-icons/bs";
import {laboratoryItems} from '../../data'
const HomeLaboratory = () => {
    return (
      <section className="laboratory-section">
        <div className="laboratory-center" id="container">
          <div className="laboratory">
            <div className="laboratory-items">
              <h3>Best Laboratory</h3>
              <span>Tests Available</span>
              <small>
                <BsList />
                We provide best test services
              </small>
              {laboratoryItems.map((item, index)=>{
                  const {icon, text}= item;
                  return (
                    <div key={index} className="laboratory-item">
                      <div>{icon}</div>
                      <p>{text}</p>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomeLaboratory;
