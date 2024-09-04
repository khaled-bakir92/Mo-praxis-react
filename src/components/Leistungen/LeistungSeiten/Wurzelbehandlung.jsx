import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const Wurzelbehandlung = () => {
  const cardTitle = "Wurzelbehandlung";
  const title = "Ein wichtiger Schritt zur Zahnerhaltung";
  const imgSrc = "../../../../images/wurzelbehandlung.png";
  const description = "Eine Wurzelbehandlung ist ein effektives, zahnärztliches Verfahren, um die Mundgesundheit zu erhalten. Sie zielt darauf ab, einen beschädigten oder infizierten Zahn zu retten und zu erhalten. Die Behandlung wird notwendig, wenn der Nerv des Zahnes oder das umliegende Gewebe entzündet oder infiziert ist, oft aufgrund von tiefer Karies, einem Riss im Zahn oder einer Verletzung.";
  const sections = [
    {
      title: "Gründe für eine Wurzelbehandlung",
      paragraphs: [
        <><strong className="strong-text">Zahnerhaltung:</strong> <span className="application-text">Anstatt den betroffenen Zahn zu entfernen, ermöglicht eine Wurzelbehandlung seine Erhaltung.</span></>,
        <><strong className="strong-text">Schmerzlinderung:</strong> <span className="application-text">Sie behebt oft effektiv Schmerzen, die durch die Entzündung oder Infektion verursacht werden.</span></>,
        <><strong className="strong-text">Vermeidung von Komplikationen:</strong> <span className="application-text">Ohne Behandlung kann eine Infektion zu Abszessen, Gewebezerstörung und weiteren gesundheitlichen Problemen führen.</span></>
      ]
    },
    {
      title: "Ablauf einer Wurzelbehandlung",
      paragraphs: [
        <><strong className="strong-text">Diagnose:</strong> <span className="application-text">Zunächst wird das Problem durch eine gründliche Untersuchung und Röntgenbilder diagnostiziert.</span></>,
        <><strong className="strong-text">Lokalanästhesie:</strong> <span className="application-text">Der betroffene Bereich wird betäubt, um eine schmerzfreie Behandlung zu gewährleisten.</span></>,
        <><strong className="strong-text">Zugang zum Zahninneren:</strong> <span className="application-text">Ein kleines Loch wird in den Zahn gebohrt, um Zugang zum Wurzelkanal zu erhalten.</span></>,
        <><strong className="strong-text">Reinigung des Wurzelkanals:</strong> <span className="application-text">Infiziertes Gewebe wird entfernt, und der Kanal wird sorgfältig gereinigt und desinfiziert.</span></>,
        <><strong className="strong-text">Füllung des Kanals:</strong> <span className="application-text">Der gereinigte Kanal wird mit einem speziellen Material gefüllt, um eine erneute Infektion zu verhindern.</span></>,
        <><strong className="strong-text">Wiederherstellung des Zahnes:</strong> <span className="application-text">Abschließend wird der Zahn oft mit einer Krone oder Füllung wiederhergestellt, um ihm Stabilität und Funktionalität zurückzugeben.</span></>
      ]
    },
    {
      title: "Nach der Behandlung",
      paragraphs: [
        <span className="application-text">Nach einer Wurzelbehandlung kann der Zahn empfindlich sein, aber dieser Zustand verbessert sich normalerweise innerhalb weniger Tage. Es ist wichtig, den Zahn und das umliegende Zahnfleisch gut zu pflegen und regelmäßige Nachuntersuchungen einzuhalten.</span>
      ]
    }
  ];
  const previousLink = "/fuellung";
  const nextLink = "/funktionsdiagnostik";

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

export default Wurzelbehandlung;