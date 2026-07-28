import "./Projects.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/images/project1.jpg",
    title: "Sky Tower",
    location: "Dubai, UAE",
    year: "2026",
  },
  {
    id: 2,
    image: "/images/project2.jpg",
    title: "Modern Villa",
    location: "Doha, Qatar",
    year: "2025",
  },
  {
    id: 3,
    image: "/images/project3.jpg",
    title: "Business Center",
    location: "London, UK",
    year: "2024",
  },
  {
    id: 4,
    image: "/images/project4.jpg",
    title: "City Bridge",
    location: "Tokyo, Japan",
    year: "2026",
  },
];

export default function Projects() {
  return (
    <section className="projects">

      <div className="projects-grid"></div>

      <div className="projects-container">

        <motion.p
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          FEATURED PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Creating Icons That Shape Cities
        </motion.h2>

        <div className="projects-wrapper">

          {projects.map((project, index) => (

            <motion.div

              key={project.id}

              className="project-card"

              initial={{
                opacity: 0,
                y: 80
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: index * .2,
                duration: .7
              }}

              viewport={{ once: true }}

            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="overlay">

                <span className="year">

                  {project.year}

                </span>

                <h3>

                  {project.title}

                </h3>

                <p>

                  <FaMapMarkerAlt />

                  {project.location}

                </p>

                <button>

                  View Project

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}