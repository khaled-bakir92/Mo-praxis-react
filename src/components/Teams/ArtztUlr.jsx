import React from 'react';
import { motion } from 'framer-motion';
import './Team.css'; // Importiere die CSS-Datei
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';

const ArtztUlr = () => {
  const careerData = [
    { year: '1988 - 1993', description: 'Studium der Zahnmedizin an der Universität Leipzig' },
    { year: '1993 - 1998', description: 'Angestellte Zahnärztin in der Praxis Dr. med. dent. Plöger in Detmold (Deutsches Implantologisches Zentrum)' },
    { year: '1997', description: 'Promotion an der Universität Göttingen (Doktor med. dent.)' },
    { year: '1998', description: 'Übernahme der Praxis von der Zahnärztin Gisela Früchel und Gründung der Zahnarztpraxis Dr. med. dent. Ulrike Schaarschmidt' },
    { year: '2001', description: 'Prüfung zur Schwerpunkttätigkeit Implantologie' },
  ];

  return (
    <div className="lebenslauf">
      <Navbar />
      <Container id="cvBox" className="cvBox">
        <motion.figure
          className="profile"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="images/team/2.png" alt="Mohamad Abden" className="profile-image" />
          <figcaption className="profile-caption">
            <strong>DR. MED. DENT. SCHAARSCHMIDT</strong>
          </figcaption>
        </motion.figure>
        <motion.div
          className="career"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
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
          <h2 className="section-title">Spezialfachgebiete</h2>
          <p>Implantologie</p>
        </motion.div>
      </Container>
      <Footer />
    </div>
  );
};

export default ArtztUlr;