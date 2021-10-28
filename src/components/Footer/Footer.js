import React from 'react'
import {GoLocation} from 'react-icons/go'
import {FiTwitter} from 'react-icons/fi'
import './Footer.css'

function Footer() {
    return (
      <footer className="footer-section">
        <div className="footer-center" id="container">
          <div className="footer">
            <span>
              To serve the humanity as a whole with this noble vision the Ibn
              Sina Trust started its journey in...
            </span>
            <div className="footer-item">
              <div>
                <GoLocation />
              </div>
              <p>House #48, Road #9/A Dhanmondi, Dhata 1209</p>
            </div>
          </div>
          <div className="footer">
            <span>Visitor Counter</span>
            <div className="footer-item">
              <div>
                <FiTwitter />
              </div>
              <p>Total visitor: something</p>
            </div>
          </div>
          <div className="footer">
            <p>© Designed and developed by Masudh</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer
