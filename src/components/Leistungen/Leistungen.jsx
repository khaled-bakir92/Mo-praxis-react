import Navbar from "../Navbar/Navbar";
import LeistungsCard from "./LeistungsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Leistungen.css";
import { useState, useEffect } from "react";
import "../Leistungen/LeistungSeiten/Fuellung";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Leistungen = () => {
  const services = [
    {
      link: "/zahnreinigung",
      image: "../../../images/tooth.png",
      title: "PROFESSIONELLE ZAHNREINIGUNG",
      text: "Eine professionelle Zahnreinigung ist ein wichtiger Bestandteil der zahnärztlichen Vorsorge und Mundgesundheit. Die Behandlung wird von ausgebildeten Dentalhygienikern durchgeführt …",
    },
    {
      link: "/parodontitisbehandlung",
      image: "../../../images/dental-care.png",
      title: "PARODONTITIS-BEHANDLUNG",
      text: "Parodontitis ist eine Erkrankung des Zahnhalteapparates, die unbehandelt zum Zahnverlust führen kann. Sie entsteht, wenn eine anfängliche Zahnfleischentzündung (Gingivitis) …",
    },
    {
      link: "/fuellung",
      image: "../../../images/filling.png",
      title: "FÜLLUNGEN & INLAYS",
      text: "Füllungen und Inlays sind zwei Arten von zahnärztlichen Restaurationen, die verwendet werden, um die Funktion und das Aussehen von beschädigten oder kariösen Zähnen wiederherzustellen …",
    },
    {
      link: "/wurzelbehandlung",
      image: "../../../images/dental-care-2.png",
      title: "WURZELBEHANDLUNG",
      text: "Eine Wurzelbehandlung ist ein effektives, zahnärztliches Verfahren, um die Mundgesundheit zu erhalten. Sie zielt darauf ab, einen beschädigten oder infizierten Zahn zu retten und zu …",
    },
    {
      link: "/funktionsdiagnostik",
      image: "../../../images/tooth-2.png",
      title: "FUNKTIONS-DIAGNOSTIK",
      text: "Die Funktionsdiagnostik in der Zahnmedizin ist ein spezialisiertes Verfahren und unverzichtbares Instrument, das darauf abzielt, Funktionsstörungen des …",
    },
    {
      link: "/vollkeramischerZahnersatz",
      image: "../../../images/tooth-whitening.png",
      title: "VOLLKERAMISCHER ZAHNERSATZ",
      text: "Vollkeramischer Zahnersatz bezeichnet Kronen, Brücken und andere Formen des Zahnersatzes, die vollständig aus Keramik bestehen. Dieses Material ist bekannt für seine hohe Ästhetik …",
    },
    {
      link: "/implantologie",
      image: "../../../images/dental-implant.png",
      title: "IMPLANTOLOGIE",
      text: "Die Implantologie ist ein hochmoderner Bereich der Zahnmedizin, der sich mit der Einsetzung von Zahnimplantaten beschäftigt. Zahnimplantate sind künstliche Zahnwurzeln, die in …",
    },
    // Füge hier weitere Services hinzu
  ];

  const [cardsPerRow, setCardsPerRow] = useState(3);

  const updateCardsPerRow = () => {
    if (window.innerWidth < 576) {
      setCardsPerRow(1);
    } else if (window.innerWidth < 768) {
      setCardsPerRow(2);
    } else {
      setCardsPerRow(3);
    }
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation nur einmal auslösen
    threshold: 0.1, // 10% des Elements müssen sichtbar sein
  });
  return (
    <div className="section2">
      <section id="leistungen" className="leistungen container my-5">
        <Container>
          <h2 className="title mb-5">Unsere Leistungen</h2>
        </Container>

        <Row className="g-1 services d-flex justify-content-center align-items-center">
          {services.map((service, index) => {
            let animationDirection;
            if (cardsPerRow === 1) {
              // Alternating direction for small devices
              animationDirection = index % 2 === 0 ? "left" : "right";
            } else {
              // Even rows come from left, odd rows come from right
              const rowIndex = Math.floor(index / cardsPerRow);
              animationDirection = rowIndex % 2 === 0 ? "left" : "right";
            }
            return (
              <LeistungsCard
                key={index}
                link={service.link}
                image={service.image}
                title={service.title}
                text={service.text}
                animationDirection={animationDirection}
              />
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default Leistungen;
