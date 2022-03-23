import React, { Component } from 'react';

class QualityPolicy extends Component {
    render() {
        return (
            <div>
                <section id="quality-policy">
                    <div className="container">
                        <div className="row" style={{ marginTop: "10%" }}>
                            <div className="col-md-12 text-center">
                                <h4 className='home-head'>Quality Policy</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center quality-policy-text card">
                                <p>
                                    To provide a framework for quality assurance and quality improvement while focusing
                                    on patient safety that has been in calculated, A decrease in the incidence of adverse events, constant monitoring and evaluation of quality related aspects within the system.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <h4 className='home-head'>Quality Objectives</h4>
                            <div className="col-md-12 text-center card">
                                <div>
                                    <ul className="text-left quality-policy-text">
                                        <li>To Facilitate and over see the implementation of the chosen strategies for overall Quality assurance and Quality improvement (QA/QI) initiative in the hospital in line with the Quality Policy of the TVVP.</li>
                                        <li>To develop annual plan for QA/QI in line with quality assurance and improvement plan as per the National Quality assurance standards</li>
                                        <li>To oversee improvement of the Quality vi National Certification including provision of the guidance advice and necessary support for taking care of new processes and changes in the system required for any such certification</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h4 className='home-head'>District Quality Team</h4>
                            <div className="col-md-12 text-center quality-policy-text card">
                                <p>
                                    Quality assurance related activities with in the hospital is planned, undertaken and controlled by District Quality Team which is a multidisciplinary team having representation from various clinical, non-clinical and administrative departments.
                                    Details of team, its scope of work, frequency of meeting and mode of operations are detailed in the operational guidelines for Quality assurance in public health facilities (page No: 25-27) published by ministry of health and family welfare, Government of India.
                                </p>
                                <h4 className='home-head text-left'>Quality Team</h4>
                                <div className='row'>
                                    <div className='col-md-3' >
                                        <ul className="text-left quality-policy-text">
                                            <li>Medical Superintendent</li>
                                            <li>RMO</li>
                                            <li>Nursing Superintendent Grade - I</li>
                                            <li>District Quality Assurance Manager</li>
                                            <li>ICN</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-3'>      
                                        <div className="card home-image-card text-center">
                                            <img className="home-image" src="./img/dqm.png" alt="Image not found" />
                                        </div>
                                        <p className='text-center' style={{marginRight:"32px"}}>DQM</p>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card home-image-card text-center">
                                            <img className="home-image" src="./img/icn1.png" alt="Image not found" />
                                        </div>
                                        <p className='text-center' style={{marginRight:"32px"}}>ICN</p>
                                    </div>
                                    <div className='col-md-3 text-center'>
                                        <div className="card home-image-card text-center">
                                            <img className="home-image" src="./img/icn2.png" alt="Image not found" />
                                        </div>
                                        <p className='text-center' style={{marginRight:"32px"}}>ICN</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 text-center">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default QualityPolicy;