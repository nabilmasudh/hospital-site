import React, { useState, useRef, useEffect } from "react";
import "./Submenu.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length >= 3) {
      setColumns("col-3");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <Link key={index} to={url}>
              {icon}
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
