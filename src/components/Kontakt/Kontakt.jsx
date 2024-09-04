import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import KontaktCard from "./KontaktCard";
import "./Kontakt.css";

const Kontakt = () => {
  const contacts = [
    {
      href: "tel:+4952323076",
      imgSrc: "images/telephone-1.png",
      title: "TELEFON",
      phone: "+49 05232 3076",
    },
    {
      href: "https://maps.app.goo.gl/8k7JD1o5yDgo6y3V9",
      imgSrc: "images/placeholder.png",
      title: "STANDORT",
      phone: (
        <>
          Heidensche Strasse 22
          <br />
          32791 Lage
        </>
      ),
    },
    {
      href: "mailto:praxis@zahnarzt-abden.de",
      imgSrc: "images/email.png",
      title: "EMAIL",
      phone: "praxis@zahnarzt-abden.de",
    },
    {
      imgSrc: "images/oeffnungszeiten.png",
    },
  ];

  return (
    <div className="section3">
      <section id="kontakt" className="kontakt container my-5">
        <Container>
          <h2 className="title mb-5">Unser Kontakt</h2>
          <Row className="cardKomponent">
            {contacts.map((contact, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={6} className="mb-4 kontakt-container">
                <KontaktCard
                  href={contact.href}
                  imgSrc={contact.imgSrc}
                  title={contact.title}
                  phone={contact.phone}
                  isLast={index === contacts.length - 1}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Kontakt;
