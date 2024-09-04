import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
<FontAwesomeIcon icon="fa-solid fa-xmark" />
function CollapsibleExample() {
  const location = useLocation();
  const navigate = useNavigate();
  const [navExpanded, setNavExpanded] = useState(false);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "me-4 nav-link active" : "me-4 nav-link";
  };

  const handleScrollLinkClick = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="navbar"
      onToggle={(expanded) => setNavExpanded(expanded)}
      expanded={navExpanded}
    >
      <Container>
        <motion.div
          className="navbar-brand"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Navbar.Brand href="/" onClick={() => scroll.scrollToTop()}>
            <img src="../../images/1.png" alt="Logo" />
          </Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler">
          <FontAwesomeIcon icon={navExpanded ? faTimes : faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <motion.div
            className="ms-auto mb-2 mb-lg-0"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Nav>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="me-4 nav-link"
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-70}
                onClick={() => {
                  handleScrollLinkClick("home");
                  setNavExpanded(false);
                }}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="leistungen"
                smooth={true}
                duration={500}
                className="me-4 nav-link"
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-70}
                onClick={() => {
                  handleScrollLinkClick("leistungen");
                  setNavExpanded(false);
                }}
              >
                Leistungen
              </ScrollLink>
              <ScrollLink
                to="team"
                smooth={true}
                duration={500}
                className="me-4 nav-link"
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-70}
                onClick={() => {
                  handleScrollLinkClick("team");
                  setNavExpanded(false);
                }}
              >
                Team
              </ScrollLink>
              <ScrollLink
                to="praxis"
                smooth={true}
                duration={500}
                className="me-4 nav-link"
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-70}
                onClick={() => {
                  handleScrollLinkClick("praxis");
                  setNavExpanded(false);
                }}
              >
                Praxis
              </ScrollLink>
              <ScrollLink
                to="kontakt"
                smooth={true}
                duration={500}
                className="me-4 nav-link"
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-70}
                onClick={() => {
                  handleScrollLinkClick("kontakt");
                  setNavExpanded(false);
                }}
              >
                Kontakt
              </ScrollLink>
              <NavLink to="/karriere" className={getNavLinkClass("/karriere")} onClick={() => setNavExpanded(false)}>
                Karriere
              </NavLink>
            </Nav>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;