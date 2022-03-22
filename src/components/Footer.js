import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <section id="footer">
                    {/*footer starts from here*/}
                    <footer className="footer">
                        <div className="container bottom_border">
                            <div className="row">
                                <div className="col-sm-4 col-md col-sm-4  col-12 col footer-left-align">
                                    <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                                    {/*headin5_amrc*/}
                                    <p className="mb10">Tealnagana governement was inaugurated 150 Bedded  MCH Block in the year 2017 and  became 400 bedded hospital.</p>
                                    <p><i className="fa fa-location-arrow" /> 65X2+PRR, Nehru Nagar, Khammam, Telangana 507002 </p>
                                    {/* <p><i className="fa fa-phone" /> +91 8978766959 </p>
                                    <p><i className="fa fa fa-envelope" /> makerides@bikersroom.com </p> */}
                                </div>
                                {/* <div class=" col-sm-4 col-md  col-6 col">
     
    </div> */}
                                
                            </div>
                        </div>
                        <div className="container">
                            <ul className="foote_bottom_ul_amrc">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services-offered">Services</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#quality-policy">Quality Policy</a></li>
                                <li><a href="#awards">Awards</a></li>
                                {/* <li><a href="#footer">Contact</a></li> */}
                            </ul>
                            {/*foote_bottom_ul_amrc ends here*/}
                            {/* <p className="text-center">Copyright @2017 | Designed With by <a href="#">Your Company Name</a></p>
                            <ul className="social_footer_ul">
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            </ul> */}
                            {/*social_footer_ul ends here*/}
                        </div>
                    </footer>
                </section>

            </div>
        );
    }
}

export default Footer;