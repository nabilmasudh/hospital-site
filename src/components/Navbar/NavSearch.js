import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Styles from "./NavSearch.module.css";
import logo from "../../assets/img/logo-light.png";
import { Link } from 'react-router-dom';
export default function NavSearch() {
    return (
      <div className={Styles.navSearch}>
        <div id="container" className={Styles.navSearchCenter}>
          <div className={Styles.navLogo}>
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={Styles.navSearch}>
            <input type="text" />
            <button>
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>
    );
}
