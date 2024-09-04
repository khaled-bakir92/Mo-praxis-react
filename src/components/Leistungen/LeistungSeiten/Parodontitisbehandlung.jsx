import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const Parodontitisbehandlung = () => {
  const cardTitle = "Parodontitisbehandlung";
  const title = "Parodontitis: Verstehen, Vorbeugen und Behandeln";
  const imgSrc = "../../../../images/parodontitisbehadlung.png";
  const description = "Parodontitis ist eine Erkrankung des Zahnhalteapparates, die unbehandelt zum Zahnverlust führen kann. Sie entsteht, wenn eine anfängliche Zahnfleischentzündung (Gingivitis) nicht behandelt wird und sich tiefer in das Gewebe ausbreitet.";
  const sections = [
    {
      title: "Ursachen und Symptome",
      paragraphs: [
        <><span className="application-text">Die Hauptursache für Parodontitis ist der bakterielle Zahnbelag (Plaque), der sich täglich auf den Zähnen bildet. Durch Rauchen, Diabetes, Stress, genetische Veranlagung und schlechte Mundhygiene kann sich das Risiko für Parodontitis zusätzlich erhöhen.</span></>,
        <><span className="application-text">Zu den Symptomen gehören:</span></>,
        <ul className="list-disc pl-6" key="3">
          <li className="application-text">Zahnfleischbluten</li>
          <li className="application-text">Geschwollenes oder gerötetes Zahnfleisch</li>
          <li className="application-text">Zahnfleischrückgang</li>
          <li className="application-text">Schlechter Atem</li>
          <li className="application-text">Lockerung der Zähne</li>
        </ul>
      ]
    },
    {
      title: "Behandlungsoptionen",
      paragraphs: [
        <><span className="application-text">Zunächst wird eine gründliche Untersuchung durchgeführt, die eine Inspektion des Zahnfleisches, Messung der Taschentiefen und möglicherweise Röntgenaufnahmen umfasst, um den Zustand des Knochens zu beurteilen. Anschließend gibt es verschiedene Möglichkeiten, um die Parodontitis zu behandeln:</span></>,
        <><strong className="strong-text">Professionelle Zahnreinigung:</strong> <span className="application-text">Die Entfernung von Plaque und Zahnstein ist ein erster Schritt. Diese Reinigung wird regelmäßig durchgeführt, um das Fortschreiten der Erkrankung zu verhindern.</span></>,
        <><strong className="strong-text">Tiefenreinigung (Scaling und Root Planing):</strong> <span className="application-text">Dies ist ein nicht-chirurgischer Eingriff, bei dem Plaque und Zahnstein unterhalb des Zahnfleischrandes entfernt werden.</span></>,
        <><strong className="strong-text">Medikamentöse Behandlung:</strong> <span className="application-text">In einigen Fällen können spezielle antibakterielle Medikamente empfehlen werden, die unter das Zahnfleisch gelegt werden.</span></>,
        <><strong className="strong-text">Chirurgische Behandlungen:</strong> <span className="application-text">Für fortgeschrittenere Fälle können chirurgische Verfahren erforderlich sein, um tiefe Taschen zu reinigen oder verlorene Knochen wiederherzustellen.</span></>
      ]
    },
    {
      title: "Vorbeugung",
      paragraphs: [
        <span className="application-text">Die beste Verteidigung gegen Parodontitis ist eine gute Mundhygiene. Dazu gehören regelmäßiges Zähneputzen, die Verwendung von Zahnseide und regelmäßige zahnärztliche Kontrollen. Wenn Sie Anzeichen von Zahnfleischproblemen bemerken, zögern Sie nicht, einen Termin mit uns zu vereinbaren. Gemeinsam können wir einen individuellen Behandlungsplan erstellen, um Ihre Zähne und Ihr Zahnfleisch gesund zu halten.</span>
      ]
    }
  ];
  const previousLink = "/zahnreinigung";
  const nextLink = "/fuellung";

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

export default Parodontitisbehandlung;