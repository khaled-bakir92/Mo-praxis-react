import React from "react";
import ImageSlider from "./ImageSlider";
import { motion } from 'framer-motion';
import "./Praxis.css";
import Container from 'react-bootstrap/Container';

export default function Praxis() {
  return (
    <div className="praxis">
      <section id="praxis" className="praxisSection container my-5">
        <Container>
          <h2 className="title mb-5">Unsere Praxis</h2>
        </Container>
        <ImageSlider />
        <br />
        <div className="information">
          <div className="text-container">
            <motion.p
              style={{ lineHeight: "1.9", marginBottom: 10 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              In unserer modern ausgestatteten Praxis legen wir großen Wert auf
              Funktionalität und fortschrittliche Technologie, um Ihnen eine
              umfassende und effiziente medizinische Versorgung zu
              gewährleisten. Unsere Räumlichkeiten umfassen drei hochwertig
              ausgestattete Behandlungsräume, die jeweils mit einer nahezu
              identischen, modernen Einrichtung versehen sind. Dies
              gewährleistet eine gleichbleibend hohe Qualität und Effizienz bei
              allen Behandlungen, die wir anbieten.
            </motion.p>
            <motion.p
              style={{ lineHeight: "1.9", marginBottom: 10 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Jeder unserer Behandlungsräume ist mit einem{" "}
              <strong>hochmodernen, strahlungsarmen Röntgengerät</strong>{" "}
              ausgestattet, das es uns ermöglicht, notwendige Röntgenaufnahmen
              direkt vor Ort, ohne zusätzlichen Raumwechsel, durchzuführen. Dies
              steigert nicht nur die Effizienz der Diagnose und Behandlung,
              sondern trägt auch maßgeblich zum Komfort und zur Entspannung
              unserer Patienten bei. Die Kombination aus fortschrittlicher
              Technik und patientenzentrierter Gestaltung unserer Praxis
              unterstreicht unser Engagement für exzellente medizinische
              Betreuung und Patientenwohl.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}