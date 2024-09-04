import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Kontakt.css';

const KontaktCard = ({ href, imgSrc, title, phone, isLast }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Verwende die spezifischen Klassen für Bilder
  const imgClassName = isLast ? 'kontakt-card-image-last' : 'kontakt-card-image';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
        <Card className="text-center kontakt-karte">
          <Card.Body>
            <div className="icon mb-3">
              <img
                src={imgSrc}
                alt="Icon"
                className={imgClassName}
              />
            </div>
            <div className="info">
              <h3 className="title">{title}</h3>
              <p className="title-p">
                {phone}
              </p>
            </div>
          </Card.Body>
        </Card>
      </a>
    </motion.div>
  );
};

export default KontaktCard;