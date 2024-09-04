import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Leistungen from '../Leistungen/Leistungen';
import Team from '../Teams/Team';
import Praxis from '../Praxis/Praxis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Kontakt from '../Kontakt/Kontakt'; 
import Footer from '../Footer/Footer';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const scrollToKontakt = () => {
  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
};

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>ABDEN Zahnarztpraxis - Ihr Zahnarzt in Lage</title>
        <meta name="description" content="Willkommen bei ABDEN Zahnarztpraxis in Lage. Wir bieten umfassende zahnärztliche Leistungen für Ihre Zahngesundheit. Kontaktieren Sie uns für Termine und Informationen." />
        <meta name="keywords" content="Zahnarzt, Zahnpraxis, Zahnarztpraxis, Zahnarzt Lage, Zahnarzt Bielefeld, Zahnarzt Herford, Zahnarzt Lemgo, Zahnarzt Detomold, Zahnarzt Paderborn, Zahngesundheit, Zahnbehandlung, Dental, Prophylaxe, Zahnersatz, Zahnreinigung, Zahnästhetik, Implantologie, Professionelle Zahnreinigung, Parodontitisbehandlung, Füllungen und Inlays, Wurzelbehandlung, Funktionsdiagnostik, Vollkeramischer Zahnersatz,عيادة اسنان في بيلفلد,عيادة اسنان في هيرفورد,عيادة اسنان في ديتمولد,عيادة اسنان في لاغيه,طبيب اسنان, عيادة اسنان" />
      </Helmet>
      <section className="main" id="home">
        <Container>
          <motion.h2
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Herzlich willkommen in der <br />
            <span>ABDEN Zahnarztpraxis!</span>
          </motion.h2>
          <motion.h3
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Ihre Zahngesundheit liegt uns am Herzen.
          </motion.h3>
          <motion.button
            className="kontakt-btn"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            onClick={scrollToKontakt}
          >
            Kontakt
          </motion.button>
          <motion.div
            className="social-icons"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </motion.div>
        </Container>
      </section>
      <section id="leistungen">
        <Leistungen />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="praxis">
        <Praxis />
      </section>
      <section id="kontakt">
        <Kontakt />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
