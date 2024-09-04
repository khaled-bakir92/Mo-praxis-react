import React from 'react';
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from "framer-motion";
import '../Leistungen/LeistungSeiten/Layout.css';
import './PrivacyLayout.css';

const TitleAnimation = ({ text }) => {
  const textArray = text.split("");

  return (
    <div className="privacy-info">
      {textArray.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 50,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
};

TitleAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};

const TextMotion = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const PrivacyLayout = ({ cardTitle, title, description, sections, previousLink, nextLink }) => {
  const renderSection = (title, paragraphs, titleClass = "privacy-section-title", contentClass = "privacy-section-content") => (
    <section className="privacy-description-section" key={title}>
      <TextMotion>
        <h4 className={titleClass}>{title}</h4>
      </TextMotion>
      {paragraphs.map((text, index) => (
        <TextMotion key={index}>
          <p className={contentClass}>{text}</p>
        </TextMotion>
      ))}
    </section>
  );

  return (
    <div className="privacy-layout">
      <Navbar />
      <Container className="privacy-container">
        <section className="privacy-description">
          <div className="max-w-4xl mx-auto py-4 px-6">
            <TextMotion>
              <p className="privacy-infocard">{cardTitle}</p>
            </TextMotion>
    
            <div className="privacy-infocard-title text-3xl font-semibold mb-2">
              <TitleAnimation text={title} />
            </div>
            <hr className="border-gray-400 mb-6" />
            <TextMotion>
              <p className="privacy-textcard">{description}</p>
            </TextMotion>
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                {renderSection(section.title, section.paragraphs)}
              </React.Fragment>
            ))}
          </div>
        </section>
        <div className="privacy-next-button">
          {previousLink && <a href={previousLink}>Previous</a>}
          {nextLink && <a href={nextLink}>Next</a>}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

PrivacyLayout.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.node).isRequired,
    })
  ).isRequired,
  previousLink: PropTypes.string,
  nextLink: PropTypes.string,
};

export default PrivacyLayout;
