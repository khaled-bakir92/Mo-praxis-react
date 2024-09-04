import { motion } from "framer-motion";

const AnimatedText = ({ textArray }) => {
  return (
    <h4>
      {textArray.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i / 10,
          }}
          viewport={{ once: true }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </h4>
  );
};