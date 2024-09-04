import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink } from "react-scroll";
import "../Navbar/Navbar.css";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Impressum from "../Privacy/Impressum";
import Datenschutz from "../Privacy/Datenschutz";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect className="footer">
      <Container className="footer-content">
        <motion.div
          className="navbar-brand"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <footer-brand href="/" onClick={() => scroll.scrollToTop()}>
          <p className="footer-title">
            
            © <span> 2024 ZAHNARZT ABDEN </span>
        </p>
          </footer-brand>
        </motion.div>
        <div className="mx-auto button-footer">
              <Link className="Datenschutz-btn" to="/datenschutz">
                Datenschutzerklärung
              </Link>
              <Link className="impressum-btn" to="/impressum">
                Impressum
              </Link>
        </div>
        <div className="social-icons-footer">
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
            </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;


