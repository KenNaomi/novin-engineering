import "./Footer.css";

import {
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";


export default function Footer(){

    return(

        <footer className="footer">

            <div className="footer-grid"></div>


            <div className="footer-container">


                <div className="footer-brand">

                    <h2>
                        NOVIN
                        <span>
                            ENGINEERING
                        </span>
                    </h2>

                    <p>
                        Creating innovative architectural
                        and engineering solutions that
                        shape the cities of tomorrow.
                    </p>


                    <div className="socials">

                        <a>
                            <FaLinkedin/>
                        </a>

                        <a>
                            <FaInstagram/>
                        </a>

                        <a>
                            <FaTwitter/>
                        </a>

                    </div>

                </div>




                <div className="footer-links">

                    <h3>
                        Company
                    </h3>

                    <a>
                        About Us
                    </a>

                    <a>
                        Services
                    </a>

                    <a>
                        Projects
                    </a>

                    <a>
                        Careers
                    </a>

                </div>




                <div className="footer-links">

                    <h3>
                        Services
                    </h3>

                    <a>
                        Architecture
                    </a>

                    <a>
                        Civil Engineering
                    </a>

                    <a>
                        Urban Planning
                    </a>

                    <a>
                        Interior Design
                    </a>

                </div>




                <div className="footer-contact">

                    <h3>
                        Contact
                    </h3>


                    <p>
                        <FaMapMarkerAlt/>

                        New York, USA
                    </p>


                    <p>
                        <FaPhone/>

                        +1 234 567 890
                    </p>


                    <p>
                        <FaEnvelope/>

                        info@novin.com
                    </p>


                </div>


            </div>



            <div className="footer-bottom">

                <p>
                    © 2026 NOVIN Engineering.
                    All Rights Reserved.
                </p>


                <p>
                    Designed With Precision
                </p>

            </div>


        </footer>

    )

}