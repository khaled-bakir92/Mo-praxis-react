import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../Leistungen/LeistungSeiten/Layout.css'; // Ensure this file is imported

const Karriere = () => {
  return (
    <div className="stellenangebot">
      <Navbar />
      <section className="pic8">
        <img src="../../../../images/karriere.png" alt="Karriere"></img>
      </section>
      <Container>
        <section className="description">
          <div className="max-w-4xl mx-auto py-4 px-6">
            <p className="infocard">Stellenangebot 01/2024</p>
            <h4 className="text-3xl font-semibold mb-2 karriere-title">Zahnmedizinischer Fachangestellter / ZFA / ZMF (m/w/d)</h4>
            <hr className="border-gray-400 mb-6" />
            <p className="textcard">Wir freuen uns auf Ihre Kontaktaufnahme:</p>
            <div className="kotaktjob-icons">
              <a href="mailto:Email@email.de">
                <FontAwesomeIcon icon={faEnvelope} className="icon-style" /> praxis@zahnarzt-abden.de
              </a>
              <br />
              <a href="tel:+4952323076">
                <FontAwesomeIcon icon={faPhone} className="icon-style" /> +49 5232 3076
              </a>
            </div>
            <br />
            <br />
            <p className="textcard">
              Wir möchten zusammen mit Ihnen Patienten zu einem glücklichen Lächeln verhelfen. Unsere moderne Praxis in Lage ist auf Implantologie und Funktionsbehandlungen spezialisiert.
            </p>
            <br />
            <p className="textcard">Zur Verstärkung unseres Teams suchen wir Sie:</p>
            <br />
            <h4 className="karriere-title">Aufgaben</h4>
            <ul className="list-disc pl-6">
              <li>Stuhlassistenz</li>
              <li>Vorbereitung, Reinigung und Sterilisation der Instrumente</li>
              <li>Anfertigung von Röntgenbildern, Abdrücken und Fotos</li>
              <li>Dokumentation der Leistungen</li>
              <li>Optimierung von Arbeitsabläufen</li>
              <li>Terminmanagement</li>
              <li>Verwaltung/Rezeption falls gewünscht</li>
              <li>Korrespondenz mit Überweisern/Laboren</li>
            </ul>
            <br />
            <h4 className="karriere-title">Ihr Profil</h4>
            <ul className="list-disc pl-6">
              <li>Abgeschlossene Ausbildung zur ZFA, ZMF oder vergleichbarer Ausbildung</li>
              <li>Röntgenschein</li>
              <li>Empathie und Zwischenmenschlichkeit</li>
              <li>Offenheit und Teamfähigkeit</li>
              <li>Spaß an Ihrem Job, an Weiterentwicklung, selbstständigem Arbeiten und Mitdenken</li>
            </ul>
            <br />
            <h4 className="karriere-title">Wir bieten</h4>
            <ul className="list-disc pl-6">
              <li>Wertschätzung und ein tolles Betriebsklima</li>
              <li>Modernes und entspanntes Arbeitsumfeld</li>
              <li>Überdurchschnittliches Gehalt</li>
              <li>Großzügige Urlaubsregelung</li>
              <li>Weiterbildungsmöglichkeiten</li>
              <li>Top-moderne Ausstattung</li>
            </ul>
            <br />
            <h4 className="karriere-title">Wir freuen uns auf Sie.</h4>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Karriere;