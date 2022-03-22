import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        {/* <section id="nav-bar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img style={{width:"40%"}} src="./img/tslogo.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services-offered">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">GALLERY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#quality-policy">QUALITY POLICY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#awards">AWARDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT US</a>
                </li>
              </ul>
            </div>
          </nav>
        </section> */}
        <div>
          <nav className="sticky navbar">
            <div className="brand  display__logo">
              <a href="#top" className="nav__link"> <img style={{width:"40%"}} src="./img/tslogo.png" /></a>
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