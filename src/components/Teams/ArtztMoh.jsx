import React from 'react';
import { motion } from 'framer-motion';
import './Team.css'; // Importiere die CSS-Datei
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';

const ArtztMoh = () => {
  const careerData = [
    { year: '2007 - 2012', description: 'Studium der Zahnmedizin an der Universität Aleppo' },
    { year: '2012', description: 'Staatsexamen' },
    { year: '2020 - 2021', description: 'Angestellter Zahnarzt in der Praxis Hennig Löw in Westerburg, Rheinland-Pfalz' },
    { year: '2021', description: 'Deutsche Approbation' },
    { year: '2022 - 2023', description: 'Angestellter Zahnarzt in der Praxis Dr. Mannsour Oralschierogie und Implantologie' },
    { year: '2024', description: 'Übernahme der Praxis von der Zahnärztin Ulrike Schaarschmidt' },
  ];

  return (
    <div className="lebenslauf">
      <Navbar />
      <Container id="cvBox" className="cvBox">
        <motion.figure
          className="profile"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{  duration: 1 }}
        >
          <img src="images/team/1.png" alt="Mohamad Abden" className="profile-image" />
          <figcaption className="profile-caption">
            <strong>MED. DENT. MOHAMAD ABDEN</strong>
          </figcaption>
        </motion.figure>
        <motion.div
          className="career"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{  duration: 1 }}
        >
          <h2 className="section-title">Beruflicher Werdegang</h2>
          <ul className="career-list">
            {careerData.map((item, index) => (
              <li key={index} className="career-item">
                <div className="career-year">{item.year}</div>
                <div className="career-desc">{item.description}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
      <Footer />
    </div>
  );
};

export default ArtztMoh;