import "./Leistungen.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
function LeistungsCard({ link, image, title, text, animationDirection }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation nur einmal auslösen
    threshold: 0.1, // 10% des Elements müssen sichtbar sein
  });

  const variants = {
    hidden: { opacity: 0, x: animationDirection === "left" ? -100 : 100 }, //vw '100vw'
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center serv"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <Link to={link} className="card text-decoration-none text-dark">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "117px", width: "117px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default LeistungsCard;
