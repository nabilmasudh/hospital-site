import React from "react";
import { FaBars } from "react-icons/fa";
import "./NavLinks.css";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { openModal, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <section className="navlink-section">
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center" id="container">
          <div className="nav-header">
            <button className="btn toggle-btn" onClick={openModal}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Home
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                About
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Doctor
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Services
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Patient Care
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Units
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Publication
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

