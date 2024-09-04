import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const Funktionsdiagnostik = () => {
  const cardTitle = "Funktionsdiagnostik";
  const title = "Ein wichtiger Schritt für Ihre orale Gesundheit";
  const imgSrc = "../../../../images/funktionsdiagnostik.png";
  const description = "Die Funktionsdiagnostik in der Zahnmedizin ist ein spezialisiertes Verfahren und unverzichtbares Instrument, das darauf abzielt, Funktionsstörungen des Kauapparates zu erkennen und zu analysieren. Dazu gehören Probleme mit dem Kiefergelenk, den Kaumuskeln sowie Fehlbelastungen der Zähne, die zu Beschwerden wie Kiefergelenksschmerzen, Kopfschmerzen, Nackenverspannungen und Zahnschäden führen können.";
  const sections = [
    {
      title: "Relevanz der Funktionsdiagnostik",
      paragraphs: [
        <><strong className="strong-text">Früherkennung:</strong> <span className="application-text">Sie hilft, potenzielle Probleme frühzeitig zu identifizieren, bevor sie schwerwiegende Beschwerden verursachen.</span></>,
        <><strong className="strong-text">Individuelle Behandlungsplanung:</strong> <span className="application-text">Auf Basis der Diagnose können spezifische, auf die jeweiligen Bedürfnisse zugeschnittene Behandlungskonzepte entwickelt werden.</span></>,
        <><strong className="strong-text">Ganzheitlicher Ansatz:</strong> <span className="application-text">Eine Funktionsdiagnostik berücksichtigt die Wechselwirkung zwischen Zähnen, Kiefergelenken, Muskeln und Nerven.</span></>
      ]
    },
    {
      title: "Ablauf einer Funktionsdiagnostik",
      paragraphs: [
        <><strong className="strong-text">Anamnese:</strong> <span className="application-text">Zuerst wird ein ausführliches Gespräch geführt, um Symptome und Beschwerden zu verstehen.</span></>,
        <><strong className="strong-text">Klinische Untersuchung:</strong> <span className="application-text">Es folgt eine Untersuchung der Kieferbewegungen, der Position und Funktion der Kiefergelenke sowie des Zustands der Kaumuskulatur.</span></>,
        <><strong className="strong-text">Instrumentelle Analyse:</strong> <span className="application-text">Mittels spezieller Geräte, wie z.B. der elektronischen Achsiographie, können die Bewegungen und Positionen der Kiefergelenke präzise gemessen werden.</span></>,
        <><strong className="strong-text">Auswertung und Behandlungsplanung:</strong> <span className="application-text">Die gesammelten Daten werden ausgewertet, um ein individuelles Behandlungskonzept zu erstellen.</span></>
      ]
    },
    {
      title: "Mögliche Behandlungsoptionen",
      paragraphs: [
        <><strong className="strong-text">Schienentherapie:</strong> <span className="application-text">Zur Entlastung der Kiefergelenke und Muskulatur.</span></>,
        <><strong className="strong-text">Physiotherapie:</strong> <span className="application-text">Zur Unterstützung der Muskelentspannung und Verbesserung der Kiefergelenkfunktion.</span></>,
        <><strong className="strong-text">Zahnärztliche Korrekturen:</strong> <span className="application-text">Beispielsweise Okklusionsanpassungen, um Fehlbelastungen der Zähne zu korrigieren.</span></>
      ]
    }
  ];
  const previousLink = "/wurzelbehandlung";
  const nextLink = "/vollkeramischerZahnersatz";

  return (
    <LeistungsLayout 
      cardTitle={cardTitle}
      title={title}
      imgSrc={imgSrc}
      description={description}
      sections={sections}
      previousLink={previousLink}
      nextLink={nextLink}
    />
  );
};

export default Funktionsdiagnostik;