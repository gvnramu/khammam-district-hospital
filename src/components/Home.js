import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import QualityPolicy from './QualityPolicy';
import Awards from './Awards';
class Home extends Component {
  render() {
    return (
      <div>
        <section className="back">
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="card home-image-card">
                  <img className="home-image" src="./img/kcr.jpeg" alt="Image not found" />
                </div>
              </div>
              <div className="col-md-6 text-center">
                <h4 className="home-head" style={{ marginTop: '18%', color:"white", fontSize: "25px" }}>
                  WELCOME TO VAIDHYA VIDHANA PARISHAD <br></br> DISTRICT HOSPITAL KHAMMAM
                </h4>
              </div>
              <div className="col-md-3 text-center">
                <div className="card home-image-card">
                  <img className="home-image" src="./img/harishrao.png" alt="Image not found" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="card home-image-card">
                  <img className="home-image" src="./img/hospital1.jpeg" alt="Image not found" />
                </div>
              </div>
              <div className="col-md-6 text-center">
                <p className="home-text">
                  Khammam hospital was inaugurated on 15th March 1968 by Sri Kasu Brahmanada Reddy, CM of AP and started functioning in the year 1969 with 150 beds as District Head Quarters Hospital.
                </p>
                <div>
                  <ul className="text-left home-text">
                    <li>Up-graded in the year 1975 with 210 beds</li>
                    <li>Further up-graded in the year 1999 with 250 beds & shifted to new block on 15th Aug 1999.</li>
                    <li>Blood bank was upgraded and blood components unit started in Sep 2010.</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="card home-image-card">
                  <img className="home-image" src="./img/hospital2.jpeg" alt="Image not found" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rmo-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="card home-image-card">
                  <img className="home-image" src="./img/medsup.png" alt="Image not found" />
                </div>
              </div>
              <div className="col-md-6 text-center">
                <h4 className="home-head">
                </h4>
              </div>
              <div className="col-md-3 text-center">
                <div className="card home-image-card">
                  <img className="home-image" src="./img/rmo.jpeg" alt="Image not found" />
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>

        <section id="services-offered">
          <div className="container" style={{marginTop:"10%"}}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h4 className='home-head'>Scope of Specialties available at District Hospital Khammam</h4>
                <h4 className='home-head'>Specialties available in the hospital</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-left">
                <div className="card">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Specialty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>General Medicine</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>General Surgery</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Obstrics & Gynecology</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Pediatrics</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Ophthalmology</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>ENT</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Orthopedics</td>
                      </tr><tr>
                        <th scope="row">8</th>
                        <td>Dermatology</td>
                      </tr><tr>
                        <th scope="row">9</th>
                        <td>Psychiatry</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div className="col-md-6 text-left">
                <div className="card">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Specialty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">10</th>
                        <td>Dental</td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td>Ayush</td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td>Gastroenterology</td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>
                        <td>Cardiology</td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>
                        <td>Nephrology</td>
                      </tr>
                      <tr>
                        <th scope="row">15</th>
                        <td>Neurology</td>
                      </tr>
                      <tr>
                        <th scope="row">16</th>
                        <td>Endocrinology</td>
                      </tr><tr>
                        <th scope="row">17</th>
                        <td>Critical care</td>
                      </tr><tr>
                        <th scope="row">18</th>
                        <td>Dialysis  (ppp)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop:"3%"}}>
              <div className="col-md-12 text-center">
                <h4 className='home-head'>Supportive Services</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-left">
                <div className="card">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Specialty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Laboratory Services</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Radiology Services</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Physiotherapy</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div className="col-md-6 text-left">
                <div className="card">
                  <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Specialty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">4</th>
                        <td>Dietary Services</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Blood Bank</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Pharmacy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <section style={{marginBottom:"10%"}}>
        
        <Gallery></Gallery>
        
        <QualityPolicy></QualityPolicy>
        <Awards></Awards>
        </section>
        {/*-----------------services-----------*/}

        {/*-----------about us--------*/}
        {/* <section id="about-us">
          <div className="container">
            <h1 className="heading">ABOUT US</h1>
            <div className="about-content">
              <p>
                Our mission is to make things going to easy and We work together to design, create and produce work that we
                are proud of for floks that we belive in. We are aviable for in a wide range of creative disciplines for a
                variety of jobs, projects and gigs.
              </p>
            </div>
          </div></section> */}
      </div>
    );
  }
}

export default Home;