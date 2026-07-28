import "./About.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function About() {

    return (

        <section className="about">

            <div className="about-grid"></div>

            <div className="container">

                <motion.div

                    className="about-left"

                    initial={{opacity:0,x:-80}}

                    whileInView={{opacity:1,x:0}}

                    viewport={{once:true}}

                    transition={{

                        duration:1

                    }}

                >

                    <p className="section-title">

                        WHO WE ARE

                    </p>

                    <h2>

                        Designing Tomorrow's
                        <br />
                        Skylines Today.

                    </h2>

                    <p className="about-text">

                        At NOVIN Engineering we combine
                        architectural creativity with
                        structural precision to deliver
                        iconic residential, commercial
                        and infrastructure projects.

                        Every project is built around
                        innovation, sustainability and
                        uncompromising engineering
                        standards.

                    </p>

                    <button>

                        Learn More

                        <FaArrowRight/>

                    </button>

                </motion.div>

                <motion.div

                    className="about-right"

                    initial={{opacity:0,x:80}}

                    whileInView={{opacity:1,x:0}}

                    viewport={{once:true}}

                    transition={{

                        duration:1

                    }}

                >

                    <div className="image-box">

                        <img

                            src="/images/about.jpg"

                            alt="about"

                        />

                        <div className="gold-border"></div>

                    </div>

                    <div className="stats">

                        <div>

                            <h3>250+</h3>

                            <span>Projects</span>

                        </div>

                        <div>

                            <h3>18</h3>

                            <span>Years</span>

                        </div>

                        <div>

                            <h3>97%</h3>

                            <span>Clients</span>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    )

}