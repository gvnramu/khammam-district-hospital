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
                                        <p className="card-text" style={{ margin: "0" }}>2015-2016 - 1st Prize</p>
                                        <p className="card-text" style={{ margin: "0" }}>2017-2018 - 1st Prize</p>
                                        <p className="card-text" style={{ margin: "0" }}>2018-2019 - Commendation</p>
                                        <p className="card-text" style={{ margin: "0" }}>2019-2020 - Commendation</p>
                                        <p className="card-text" style={{ margin: "0" }}>2020-2021 - Commendation</p>
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
                        <div className="row services" style={{ marginTop: "20px" }}>
                            <div className="col-md-6 text-center">
                                <div className="card" style={{ width: '30rem' }}>
                                    <div className="card-body">
                                        <img className="ser-image" src="./img/award.jpeg" alt="Image not found" />
                                        <h4 className="card-title">LAQSHYA</h4>
                                        <p className="card-text">Certified with platinum badge in 2018-2019 (1st District hospital in Telangana)</p>
                                    </div>
                                    {/* <div className="card-footer">
                                    </div> */}
                                </div>

                            </div>
                            <div className="col-md-6 text-center">
                                <div className="card" style={{ width: '30rem' }}>
                                    <div className="card-body">
                                        <table className="table table-bordered table-hover">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Statutory</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>PCB</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>AERB</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Blood Centre</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>USG</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Drug License Narcotic & Psychotropic drugs </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Spirit</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td>EQAS</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>AERB / TCD Badges</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="card-footer">
                                    </div> */}
                                </div>
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
