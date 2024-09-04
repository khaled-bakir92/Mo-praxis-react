import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const Implantologie = () => {
  const cardTitle = "Implantologie";
  const title = "Moderne Lösungen für fehlende Zähne";
  const imgSrc = "../../../../images/implantologie.png";
  const description = "Die Implantologie ist ein hochmoderner Bereich der Zahnmedizin, der sich mit der Einsetzung von Zahnimplantaten beschäftigt. Zahnimplantate sind künstliche Zahnwurzeln, die in den Kieferknochen eingesetzt werden, um einen oder mehrere verlorene Zähne zu ersetzen. Sie bieten eine dauerhafte und ästhetisch ansprechende Lösung für fehlende Zähne.";
  const sections = [
    {
      title: "Vorteile von Zahnimplantaten",
      paragraphs: [
        <><strong className="strong-text">Natürliches Aussehen und Gefühl:</strong> <span className="application-text">Implantate sehen aus und fühlen sich an wie natürliche Zähne.</span></>,
        <><strong className="strong-text">Funktionalität:</strong> <span className="application-text">Sie ermöglichen es, ohne Einschränkungen zu kauen und zu sprechen.</span></>,
        <><strong className="strong-text">Knochenerhaltung:</strong> <span className="application-text">Implantate unterstützen den Erhalt des Kieferknochens und verhindern dessen Abbau.</span></>,
        <><strong className="strong-text">Langlebigkeit:</strong> <span className="application-text">Mit guter Pflege können Implantate ein Leben lang halten.</span></>
      ]
    },
    {
      title: "Behandlungsablauf",
      paragraphs: [
        <><strong className="strong-text">Erstberatung:</strong> <span className="application-text">Grundlage bilden eine Besprechung der medizinischen Vorgeschichte, eine gründliche Untersuchung und Klärung individueller Bedürfnisse.</span></>,
        <><strong className="strong-text">Behandlungsplanung:</strong> <span className="application-text">Mittels moderner Diagnoseverfahren wie der digitalen Volumentomographie wird die präzise Positionierung des Implantats geplant.</span></>,
        <><strong className="strong-text">Chirurgische Einsetzung:</strong> <span className="application-text">Das Implantat wird unter örtlicher Betäubung in den Kieferknochen eingesetzt. Dieser Eingriff ist in der Regel minimalinvasiv.</span></>,
        <><strong className="strong-text">Einheilphase:</strong> <span className="application-text">Nach der Einsetzung folgt eine Einheilphase, während derer das Implantat mit dem Knochen verwächst (Osseointegration).</span></>,
        <><strong className="strong-text">Prothetische Versorgung:</strong> <span className="application-text">Nach erfolgreicher Einheilung wird der Zahnersatz (Krone, Brücke oder Prothese) auf dem Implantat befestigt.</span></>
      ]
    },
    {
      title: "Zielgruppe",
      paragraphs: [
        <span className="application-text">Die meisten Menschen, die einen oder mehrere Zähne verloren haben, können von Implantaten profitieren. Wichtige Voraussetzungen sind ein guter allgemeiner Gesundheitszustand und ausreichend Kieferknochen zur Verankerung der Implantate.</span>
      ]
    }
  ];
  const previousLink = "/vollkeramischerZahnersatz";
  const nextLink = "/parodontitisbehandlung";

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

export default Implantologie;