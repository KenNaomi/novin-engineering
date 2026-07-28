import "./Statistics.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const stats = [
  {
    number: 250,
    suffix: "+",
    title: "Completed Projects",
  },
  {
    number: 18,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 97,
    suffix: "%",
    title: "Client Satisfaction",
  },
  {
    number: 42,
    suffix: "",
    title: "Professional Engineers",
  },
];
export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .4,
  });
  return (
    <section className="statistics" ref={ref}>
      <div className="statistics-grid"></div>
      <div className="statistics-container">

        <motion.p

          className="section-title"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

        >

          OUR ACHIEVEMENTS

        </motion.p>

        <motion.h2

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

          viewport={{ once: true }}

        >

          Numbers That Define Excellence

        </motion.h2>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <motion.div

              key={index}

              className="stat-card"

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

              <h3>

                {item.number}
                {item.suffix}

              </h3>

              <span>

                {item.title}

              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}