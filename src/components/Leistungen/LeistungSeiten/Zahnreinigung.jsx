import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const Zahnreinigung = () => {
  const cardTitle = "Professionelle Zahnreinigung";
  const title = "Ihr Weg zu einem gesünderen Lächeln";
  const imgSrc = "../../../../images/professionellezahnreinigung.png";
  const description = "Eine professionelle Zahnreinigung ist ein wichtiger Bestandteil der zahnärztlichen Vorsorge und Mundgesundheit. Die Behandlung wird von ausgebildeten Dentalhygienikern durchgeführt und entfernt Zahnbelag und Zahnstein, die sich im Laufe der Zeit auf und zwischen den Zähnen ansammeln.";
  const sections = [
    {
      title: "Gründe für eine Zahnreinigung",
      paragraphs: [
        <><strong className="strong-text">Vorbeugung von Zahnkrankheiten:</strong> <span className="application-text">Regelmäßige Zahnreinigungen helfen, Zahnfleischerkrankungen und Karies vorzubeugen.</span></>,
        <><strong className="strong-text">Früherkennung von Problemen:</strong> <span className="application-text">Während der Reinigung können frühe Anzeichen von Problemen wie Karies oder Zahnfleischerkrankungen erkannt werden.</span></>,
        <><strong className="strong-text">Entfernung von Verfärbungen:</strong> <span className="application-text">Professionelle Reinigung kann einige der Verfärbungen entfernen, die durch Kaffee, Tee, Tabak oder Rotwein verursacht werden.</span></>,
        <><strong className="strong-text">Frischer Atem:</strong> <span className="application-text">Sie hilft, Bakterien zu entfernen, die schlechten Atem verursachen.</span></>
      ]
    },
    {
      title: "Ablauf der Behandlung",
      paragraphs: [
        <><strong className="strong-text">Untersuchung:</strong> <span className="application-text">Zunächst untersucht der Dentalhygieniker Zähne und Zahnfleisch, um eventuelle problematische Bereiche zu identifizieren.</span></>,
        <><strong className="strong-text">Entfernung von Plaque und Zahnstein:</strong> <span className="application-text">Anschließend werden mit speziellen Instrumenten Plaque und Zahnstein sanft von der Zahnoberfläche und den Zahnzwischenräumen entfernt.</span></>,
        <><strong className="strong-text">Polieren:</strong> <span className="application-text">Danach werden die Zähne poliert, um Verfärbungen an der Oberfläche zu entfernen.</span></>,
        <><strong className="strong-text">Fluoridbehandlung:</strong> <span className="application-text">Abschließend kann optional eine Fluoridbehandlung erfolgen, um den Zahnschmelz zu stärken und Karies vorzubeugen.</span></>
      ]
    },
    {
      title: "Häufigkeit der Behandlung",
      paragraphs: [
        <span className="application-text">Dies hängt von Ihrer individuellen Mundgesundheit ab. Generell wird empfohlen, mindestens zweimal im Jahr eine professionelle Zahnreinigung durchführen zu lassen, denn eine professionelle Zahnreinigung ist mehr als nur eine kosmetische Behandlung; sie ist ein wesentlicher Bestandteil der allgemeinen Mundgesundheit.</span>
      ]
    }
  ];
  const previousLink = "/implantologie";
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

export default Zahnreinigung;