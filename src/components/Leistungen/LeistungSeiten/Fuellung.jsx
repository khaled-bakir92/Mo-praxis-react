import React from 'react';
import LeistungsLayout from './LeistungsLayout.jsx';

const Fuellung = () => {
  const cardTitle = "Professionelle Füllungen und Inlays";
  const title = "Restaurative Lösungen für Ihre Zähne";
  const imgSrc = "../../../../images/füllungen_inlays.png";
  const description = "Füllungen und Inlays sind zwei Arten von zahnärztlichen Restaurationen, die verwendet werden, um die Funktion und das Aussehen von beschädigten oder kariösen Zähnen wiederherzustellen. Während Füllungen direkt in den Zahn eingebracht werden, um kleinere Kavitäten zu schließen, werden Inlays individuell angefertigt und in den Zahn eingesetzt, um größere Defekte zu behandeln.";
  const sections = [
    {
      title: "Füllungen: Schnelle und effektive Behandlung",
      paragraphs: [
        <><strong className="strong-text">Anwendung:</strong> <span className="application-text">Füllungen werden verwendet, um kleinere Kavitäten zu schließen, die durch Karies entstanden sind.</span></>,
        <><strong className="strong-text">Materialien:</strong> <span className="materials-text">Es stehen verschiedene Füllmaterialien zur Verfügung, darunter Amalgam, Komposit, Gold und Porzellan, je nach Bedürfnissen und Vorlieben.</span></>
      ]
    },
    {
      title: "Inlays: Präzise und langlebige Restaurationen",
      paragraphs: [
        <><strong className="strong-text">Anwendung:</strong> <span className="application-text">Inlays sind ideal für größere Kavitäten, die nicht mit einer herkömmlichen Füllung behandelt werden können.</span></>,
        <><strong className="strong-text">Anfertigung:</strong> <span className="application-text">Sie werden in einem zahntechnischen Labor nach einem Abdruck maßgefertigt und passen sich perfekt der Form des Zahnes an.</span></>,
        <><strong className="strong-text">Materialien:</strong> <span className="materials-text">Inlays können aus Gold, Porzellan oder Kompositmaterialien hergestellt werden, die für ihre Langlebigkeit und Ästhetik bekannt sind.</span></>
      ]
    },
    {
      title: "Gründe für professionelle Füllungen und Inlays",
      paragraphs: [
        <><strong className="strong-text">Wiederherstellung der Funktion:</strong> <span className="application-text">Sie stellen die normale Funktion Ihres Zahnes wieder her und ermöglichen es, ohne Beschwerden zu kauen.</span></>,
        <><strong className="strong-text">Ästhetik:</strong> <span className="application-text">Moderne Materialien bieten eine natürliche Optik, die sich harmonisch in das Lächeln einfügt.</span></>,
        <><strong className="strong-text">Langlebigkeit:</strong> <span className="materials-text">Professionell eingesetzte Füllungen und Inlays sind sehr haltbar und können bei guter Pflege viele Jahre halten.</span></>
      ]
    },
    {
      title: "Behandlungsablauf",
      paragraphs: [
        <><strong className="strong-text">Untersuchung und Beratung</strong> <span className="application-text">Der betroffene Zahn wird untersucht, anschließend wird die beste Behandlungsoption besprochen.</span></>,
        <><strong className="strong-text">Vorbereitung:</strong> <span className="application-text">Der Zahn wird vorbereitet, indem Karies entfernt und der Zahn gereinigt wird.</span></>,
        <><strong className="strong-text">Anpassung:</strong> <span className="materials-text">Bei einem Inlay wird ein Abdruck für das zahntechnische Labor genommen. Bei einer Füllung wird das Material direkt eingebracht.</span></>,
        <><strong className="strong-text">Einsetzen und Anpassen:</strong> <span className="materials-text">Das Inlay wird eingesetzt und sorgfältig angepasst. Bei Füllungen wird das Material modelliert und ausgehärtet.</span></>,
        <><strong className="strong-text">Abschlusskontrolle:</strong> <span className="materials-text">Wir überprüfen die Bissfunktion und stellen sicher, dass alles komfortabel und funktional ist.</span></>
      ]
    }
  ];
  const previousLink = "/parodontitisbehandlung";
  const nextLink = "/wurzelbehandlung";

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

export default Fuellung;












// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import LeistungsLayout from './LeistungsLayout.jsx';

// const Fuellung = () => {
//   const text1 = "Restaurative Lösungen für Ihre Zähne".split(" ");
//   const text2 = "Füllungen: Schnelle und effektive Behandlung".split(" ");
//   const text3 = "Inlays: Präzise und langlebige Restaurationen".split(" ");

//   const AnimatedText = ({ textArray }) => {
//     const { ref, inView } = useInView({ triggerOnce: true });

//     return (
//       <h4 ref={ref}>
//         {textArray.map((el, i) => (
//           <motion.span
//             key={i}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: inView ? 1 : 0 }}
//             transition={{
//               duration: 0.25,
//               delay: i / 10,
//             }}
//           >
//             {el}{" "}
//           </motion.span>
//         ))}
//       </h4>
//     );
//   };

//   const renderSection = (titleArray, paragraphs, titleClass = "section-title", contentClass = "section-content") => (
//     <section className="description-section" key={titleArray.join(" ")}>
//       <AnimatedText textArray={titleArray} />
//       {paragraphs.map((text, index) => (
//         <p key={index} className={contentClass}>{text}</p>
//       ))}
//     </section>
//   );

//   const cardTitle = "Professionelle Füllungen und Inlays";
//   const title = <AnimatedText textArray={text1} />;
//   const imgSrc = "../../../../images/füllungen_inlays.png";
//   const description = "Füllungen und Inlays sind zwei Arten von zahnärztlichen Restaurationen, die verwendet werden, um die Funktion und das Aussehen von beschädigten oder kariösen Zähnen wiederherzustellen. Während Füllungen direkt in den Zahn eingebracht werden, um kleinere Kavitäten zu schließen, werden Inlays individuell angefertigt und in den Zahn eingesetzt, um größere Defekte zu behandeln.";
//   const sections = [
//     {
//       title: text2,
//       paragraphs: [
//         <><strong className="strong-text">Anwendung:</strong> <span className="application-text">Füllungen werden verwendet, um kleinere Kavitäten zu schließen, die durch Karies entstanden sind.</span></>,
//         <><strong className="strong-text">Materialien:</strong> <span className="materials-text">Es stehen verschiedene Füllmaterialien zur Verfügung, darunter Amalgam, Komposit, Gold und Porzellan, je nach Bedürfnissen und Vorlieben.</span></>
//       ]
//     },
//     {
//       title: text3,
//       paragraphs: [
//         <><strong className="strong-text">Anwendung:</strong> <span className="application-text">Inlays sind ideal für größere Kavitäten, die nicht mit einer herkömmlichen Füllung behandelt werden können.</span></>,
//         <><strong className="strong-text">Anfertigung:</strong> <span className="application-text">Sie werden in einem zahntechnischen Labor nach einem Abdruck maßgefertigt und passen sich perfekt der Form des Zahnes an.</span></>,
//         <><strong className="strong-text">Materialien:</strong> <span className="materials-text">Inlays können aus Gold, Porzellan oder Kompositmaterialien hergestellt werden, die für ihre Langlebigkeit und Ästhetik bekannt sind.</span></>
//       ]
//     }
//   ];
//   const previousLink = "/parodontitisbehandlung";
//   const nextLink = "/wurzelbehandlung";

//   return (
//     <LeistungsLayout 
//       cardTitle={cardTitle}
//       title={title}
//       imgSrc={imgSrc}
//       description={description}
//       sections={sections}
//       previousLink={previousLink}
//       nextLink={nextLink}
//     />
//   );
// };

// export default Fuellung;