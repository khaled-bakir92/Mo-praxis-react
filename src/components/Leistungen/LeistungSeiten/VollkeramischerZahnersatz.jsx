import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const VollkeramischerZahnersatz = () => {
  const cardTitle = "Vollkeramischer Zahnersatz";
  const title = "Ästhetik trifft Funktionalität";
  const imgSrc = "../../../../images/Vollkeramischerzahnersatz.png";
  const description = "Vollkeramischer Zahnersatz bezeichnet Kronen, Brücken und andere Formen des Zahnersatzes, die vollständig aus Keramik bestehen. Dieses Material ist bekannt für seine hohe Ästhetik, da es dem natürlichen Zahn in Farbe und Transluzenz sehr ähnlich ist. Vollkeramik bietet eine metallfreie Lösung für die Wiederherstellung Ihrer Zähne.";
  const sections = [
    {
      title: "Vorteile von vollkeramischem Zahnersatz",
      paragraphs: [
        <><strong>Natürliches Aussehen:</strong> Die Farbe und Transparenz von Keramik imitieren perfekt das natürliche Aussehen von Zähnen.</>,
        <><strong>Biokompatibilität:</strong> Keramik ist sehr verträglich und löst selten allergische Reaktionen aus.</>,
        <><strong>Langlebigkeit und Stabilität:</strong> Moderne Keramikmaterialien sind sehr stabil und haltbar.</>,
        <><strong>Gewebefreundlichkeit:</strong> Keramik fördert eine gute Gesundheit des umliegenden Zahnfleisches.</>
      ]
    },
    {
      title: "Anwendungsbereiche",
      paragraphs: [
        <><strong>Vollkeramik wird häufig für folgende Anwendungen verwendet:</strong></>,
        <><strong>Kronen:</strong> Zur Abdeckung und Stärkung beschädigter Zähne.</>,
        <><strong>Brücken:</strong> Zum Ersatz eines oder mehrerer fehlender Zähne.</>,
        <><strong>Inlays und Onlays:</strong> Für eine ästhetische und funktionale Wiederherstellung bei Zahndefekten.</>
      ]
    },
    {
      title: "Der Behandlungsablauf",
      paragraphs: [
        <><strong>Beratung und Planung:</strong> Bedürfnisse und Erwartungen werden besprochen, bevor die Behandlung geplant wird.</>,
        <><strong>Vorbereitung des Zahnes:</strong> Der betroffene Zahn wird vorsichtig vorbereitet, um Platz für den Zahnersatz zu schaffen.</>,
        <><strong>Abdrucknahme:</strong> Ein präziser Abdruck des Zahnes wird angefertigt, um den Zahnersatz maßgenau zu fertigen.</>,
        <><strong>Anfertigung des Zahnersatzes:</strong> Der Zahnersatz wird im Dentallabor nach höchsten Standards gefertigt.</>,
        <><strong>Einsetzen und Anpassung:</strong> Der fertige Zahnersatz wird eingesetzt und sorgfältig angepasst, um Komfort und Funktionalität zu gewährleisten.</>
      ]
    },
    {
      title: "Zielgruppe",
      paragraphs: [
        "Vollkeramischer Zahnersatz ist ideal für Patienten, die Wert auf eine hohe Ästhetik legen und eine metallfreie Lösung bevorzugen. Er eignet sich für fast alle Bereiche des Mundes und kann bei einer Vielzahl von zahnärztlichen Problemen eingesetzt werden."
      ]
    }
  ];
  const previousLink = "/funktionsdiagnostik";
  const nextLink = "/implantologie";

  return <LeistungsLayout 
            cardTitle={cardTitle}
            title={title}
            imgSrc={imgSrc}
            description={description}
            sections={sections}
            previousLink={previousLink}
            nextLink={nextLink}
          />;
};

export default VollkeramischerZahnersatz;