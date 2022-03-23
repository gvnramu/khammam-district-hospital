import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="sticky navbar">
            <div className="brand  display__logo">
              <a href="#top" className="nav__link"> <img style={{ width: "40%" }} src="./img/tslogo.png" /></a>
            </div>
            <input type="checkbox" id="nav" className="hidden" />
            <label htmlFor="nav" className="nav__open"><i /><i /><i /></label>
            <div className="nav">
              <ul className="nav__items">
                <li className=""><a href="#home" className="nav__link">Home</a></li>
                <li className=""><a href="#services-offered" className="nav__link">Services</a></li>
                <li className=""><a href="#gallery" className="nav__link">Gallery</a></li>
                <li className=""><a href="#quality-policy" className="nav__link">Quality Policy</a></li>
                <li className=""><a href="#awards" className="nav__link">Awards</a></li>
                <li className=""><a href="#footer" className="nav__link">Contact Us</a></li>
              </ul>
            </div>
          </nav>

        </div>

      </div>
    );
  }
}

export default Header;