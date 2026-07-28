import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">

      {/* پس‌زمینه */}
      <div className="hero-overlay"></div>

      {/* Grid */}
      <div className="hero-grid"></div>

      {/* محتوا */}
      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NOVIN ENGINEERING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: .3
          }}
        >
          WE DON'T JUST BUILD
          <br />
          WE CREATE LANDMARKS
        </motion.h1>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1
          }}
        >
          Architecture • Civil Engineering • Innovation
        </motion.span>

        <motion.div
          className="hero-buttons"

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:1.4
          }}

        >

          <button className="btn-primary">

            Explore Projects

            <FaArrowRight/>

          </button>

          <button className="btn-secondary">

            Contact Us

          </button>

        </motion.div>

      </div>

      {/* خطوط تزئینی */}
      <div className="line left"></div>
      <div className="line right"></div>

    </section>
  );
}