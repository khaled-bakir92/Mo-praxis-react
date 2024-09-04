import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css';

const TeamCard = ({ name, title, imageSrc, cardClass, isLarge, isSmall, link }) => {
  // Dynamische Klasse hinzufügen, basierend darauf, ob die Karte groß oder klein sein soll
  const columnClass = isLarge ? "col-sm-6" : (isSmall ? "col-sm-6 col-md-4 col-lg-2" : "col-sm-6 col-md-4 col-lg-2");
  const sizeClass = isLarge ? "large-card" : (isSmall ? "klein-card" : "");

  return (
    <motion.div
      className={`d-flex justify-content-center ${cardClass} ${columnClass} ${sizeClass}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {link ? (
        <Link to={link} className="card text-decoration-none text-dark">
          <div className="teams-card">
            <div className="card-image">
              <img src={imageSrc} className="card-img-top" alt={name} />
            </div>
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{title}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="card text-decoration-none text-dark">
          <div className="teams-card">
            <div className="card-image">
              <img src={imageSrc} className="card-img-top" alt={name} />
            </div>
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{title}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TeamCard;
