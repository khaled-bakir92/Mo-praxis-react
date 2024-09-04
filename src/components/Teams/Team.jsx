import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamCard from "./TeamCards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

const teamMembers = [
  {
    name: "MED. DENT. MOHAMAD ABDEN",
    title: "Praxisleitung",
    imageSrc: "images/team/1.png",
    cardClass: "mita-card",
    isLarge: true,
    link: "/lebenslauf",
  },
  {
    name: "DR. MED. DENT. ULRIKE SCHAARSCHMIDT",
    title: "Implantologie",
    imageSrc: "images/team/2.png",
    cardClass: "mita-card",
    isLarge: true,
    link: "/lebenslauf1",
  },
  {
    name: "JOHANNES KRAUSE",
    title: "Zahntechniker",
    imageSrc: "images/team/3.png",
    cardClass: "mita-card",
    isSmall: true,
  },
  {
    name: "OLGA SEWRJUKOW",
    title: (
      <>
        ZMFA, Verwaltung,
        <br />
        Assistenz, Prophylaxe
      </>
    ),
    imageSrc: "images/team/4.png",
    cardClass: "mita-card",
    isSmall: true,
  },
  {
    name: "HEIKE WÖRMANN",
    title: "ZMFA, Verwaltung",
    imageSrc: "images/team/5.png",
    cardClass: "mita-card",
    isSmall: true,
  },
  {
    name: "JULIA KRÖKER",
    title: (
      <>
        ZMFA, Verwaltung,
        <br />
        Assistenz, Prophylaxe
      </>
    ),
    imageSrc: "images/team/6.png",
    cardClass: "mita-card",
    isSmall: true,
  },
  {
    name: "RASHA ALMOHAMMAD",
    title: "Praktikantin",
    imageSrc: "images/team/7.png",
    cardClass: "mita-card",
    isSmall: true,
  },
];

const Team = () => {
  return (
    <div className="section3">
      <section id="team" className="team container my-5">
        <Container className="teams">
          <h2 className="title mb-5">Unser Team</h2>
          <Row className="cardRow">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                imageSrc={member.imageSrc}
                cardClass={member.cardClass}
                isLarge={member.isLarge}
                isSmall={member.isSmall}
                link={member.link} // Übergabe des link Props
              />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;
