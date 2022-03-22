import React, { Component } from 'react';

class Awards extends Component {
    render() {
        return (
            <div>
                <section id="awards">
                    <div className="container">
                        <h1 className="heading">Awards</h1>
                        <div className="row services">
                            <div className="col-md-6 text-center">
                                <div className="card" style={{ width: '30rem' }}>
                                    <div className="card-body">
                                        <img className="ser-image" src="./img/award.jpeg" alt="Image not found" />
                                        <h4 className="card-title">KAYAKALP</h4>
                                        <p className="card-text" style={{margin:"0"}}>2015-2016 - 1st Prize</p>
                                        <p className="card-text" style={{margin:"0"}}>2017-2018 - 1st Prize</p>
                                        <p className="card-text" style={{margin:"0"}}>2018-2019 - Commendation</p>
                                        <p className="card-text" style={{margin:"0"}}>2019-2020 - Commendation</p>
                                        <p className="card-text" style={{margin:"0"}}>2020-2021 - Commendation</p>
                                    </div>
                                    {/* <div className="card-footer">
                                    </div> */}
                                </div>
                                
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="card" style={{ width: '30rem' }}>
                                <div className="card-body">
                                        <img className="ser-image" src="./img/award.jpeg" alt="Image not found" />
                                        <h4 className="card-title">NQAS</h4>
                                        <p className="card-text">Certified 2018 -2019 with 90% (1st District hospital in Telangana)</p>
                                    </div>  
                                    {/* <div className="card-footer">

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row services" style={{marginTop:"20px"}}>
                            <div className="col-md-3 text-center">
                                </div>
                            <div className="col-md-6 text-center">
                            <div className="card" style={{ width: '30rem' }}>
                                    <div className="card-body">
                                        <img className="ser-image" src="./img/award.jpeg" alt="Image not found" />
                                        <h4 className="card-title">NAQSHYA</h4>
                                        <p className="card-text">Certified with platinum badge in 2018-2019 (1st District hospital in Telangana)</p>
                                    </div>
                                    {/* <div className="card-footer">
                                    </div> */}
                                </div>
                                
                            </div>
                            <div className="col-md-3 text-center">
                                </div>
                            {/* <div className="col-md-6 text-center">
                                <div className="card" style={{ width: '30rem' }}>
                                <div className="card-body">
                                        <img className="ser-image" src="./img/award.jpeg" alt="Image not found" />
                                        <h4 className="card-title">NQAS</h4>
                                        <p className="card-text">Certified 2018 -2019 with 90% (1st District hospital in Telangana)</p>
                                    </div>  
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Awards;
