import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import {sublinks} from '../../data'
import './Modal.css'
import { Link } from "react-router-dom";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <div className='modal-links-center'>
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <div className='modal-links' key={index}>
                <Link to='/'>{page}</Link>
                <ul className="modal-sublinks">
                  {links.map((link, index) => {
                    const { icon, label, url } = link;
                    return (
                      <li key={index}>
                        <Link to={url}>
                          {icon}
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
