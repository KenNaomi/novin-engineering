import "./Services.css";
import { motion } from "framer-motion";

import {
  FaBuilding,
  FaHardHat,
  FaCity,
  FaDraftingCompass,
  FaRoad,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    number: "01",
    icon: <FaBuilding />,
    title: "Architecture",
    desc: "Innovative architectural solutions that blend aesthetics, functionality and sustainability.",
  },
  {
    number: "02",
    icon: <FaHardHat />,
    title: "Civil Engineering",
    desc: "High-performance structural engineering for residential, commercial and industrial projects.",
  },
  {
    number: "03",
    icon: <FaCity />,
    title: "Urban Planning",
    desc: "Designing modern cities with intelligent infrastructure and sustainable development.",
  },
  {
    number: "04",
    icon: <FaDraftingCompass />,
    title: "Interior Design",
    desc: "Premium interior concepts focused on elegance, comfort and productivity.",
  },
  {
    number: "05",
    icon: <FaRoad />,
    title: "Infrastructure",
    desc: "Roads, tunnels, transportation systems and public infrastructure built for the future.",
  },
  {
    number: "06",
    icon: <FaTools />,
    title: "Construction",
    desc: "Professional construction management with modern engineering standards.",
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-grid"></div>

      <div className="services-container">
        <motion.p
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          OUR SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Engineering Excellence
        </motion.h2>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="service-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <span className="bg-number">{service.number}</span>

              <div className="icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <button>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}