import "./CEO.css";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

export default function CEO() {
  return (
    <section className="ceo">

      <div className="ceo-grid"></div>

      <div className="ceo-container">

        {/* تصویر */}

        <motion.div
          className="ceo-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <img
            src="/images/ceo.jpg"
            alt="CEO"
          />

          <div className="gold-circle"></div>

        </motion.div>

        {/* اطلاعات */}

        <motion.div
          className="ceo-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="section-title">
            FOUNDER & CEO
          </p>

          <h2>
            Majid Yahyavi
          </h2>

          <span className="position">
            Chief Executive Officer
          </span>

          <blockquote>

            "Architecture is where
            imagination becomes
            reality."

          </blockquote>

          <p className="bio">

            With more than 18 years of
            experience in civil engineering
            and architecture, Michael has
            led hundreds of successful
            residential, commercial and
            infrastructure projects around
            the world.

          </p>

          <div className="info-grid">

            <div>

              <FaBriefcase />

              <span>

                250+ Projects

              </span>

            </div>

            <div>

              <FaMapMarkerAlt />

              <span>

                Tehran, Golestan

              </span>

            </div>

            <div>

              <FaEnvelope />

              <span>

                ceo@novin.com

              </span>

            </div>

            <div>

              <FaLinkedin />

              <span>

                LinkedIn Profile

              </span>

            </div>

          </div>

          <img
            className="signature"
            src="/images/signature.png"
            alt="Signature"
          />

        </motion.div>

      </div>

    </section>
  );
}