import React from 'react';
import PrivacyLayout from './PrivacyLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const impressumContent = {
  cardTitle: '© 2024 ZAHNARZT ABDEN',
  title: 'IMPRESSUM',
  description: '',
  sections: [
    {
      title: '',
      paragraphs: [
        <>
          <p className="textcard">Mohamad Abden Zahnarztpraxis</p>
          <div className="kontaktjob-icons">
          <a href="https://maps.app.goo.gl/8k7JD1o5yDgo6y3V9">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Heidensche Straße 22 <br />
            &nbsp; &nbsp; 32791 Lage
          </a>
            <br />
            <br />
            <a href="tel:+4952323076">
              <FontAwesomeIcon icon={faPhone} /> +49 5232 3076
            </a>
            <br />
            <br />
            <a href="mailto:praxis@zahnarzt-abden.de">
              <FontAwesomeIcon icon={faEnvelope} /> praxis@zahnarzt-abden.de
            </a>
            <br />
            <br />
            <a href="https://www.zahnarzt-abden.de/">
              <FontAwesomeIcon icon={faGlobe} /> www.zahnarzt-abden.de/
            </a>
          </div>
          <br />
          <br />
          <p className="textcard">Inhaltlich Verantwortlicher nach §55 Abs. 2 RStV:<br />Mohamad Abden</p>
          <p className="textcard">Gesetzliche Berufsbezeichnung: <br />Zahnarzt</p>
          <p className="textcard">Verleihender Staat für die gesetzliche Berufsbezeichnung: <br />Bundesrepublik Deutschland</p>
          <p className="textcard">Zuständige Aufsichtsbehörde und Kammer: <br />Zahnärztekammer und Kassenzahnärztliche Vereinigung Westfalen Lippe, Auf der Horst 29, 48147 Münster</p>
          <p className="textcard">Quellenangaben für die verwendeten Bilder und Grafiken:</p>
          <ul className="list-disc pl-6">
            <li>Professionelle Zahnreinigung - Foto von <a href="https://unsplash.com/de/@thehumbleco?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>The Humble Co.</u></a> auf <a href="https://unsplash.com/de/fotos/blau-weisse-zahnburste-im-klarglasgefass-cADflhZzgyo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Funktionsdiagnostik - Foto von <a href="https://unsplash.com/de/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Jonathan Borba</u></a> auf <a href="https://unsplash.com/de/fotos/person-im-grauen-langarmhemd-mit-schwarzem-tablet-computer-v_2FRXEba94?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Wurzelbehandlung - Foto von <a href="https://unsplash.com/de/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Jonathan Borba</u></a> auf <a href="https://unsplash.com/de/fotos/frau-im-weissen-peeling-anzug-mit-weissem-und-grunem-schlauch-hl6uG9cHW5A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Parodontitisbehandlung - Foto von <a href="https://unsplash.com/de/@quangtri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Quang Tri NGUYEN</u></a> auf <a href="https://unsplash.com/de/fotos/person-im-blauen-langarmhemd-mit-schwarz-weissem-tablett-VckdJzo7ig0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Implantologie - Foto von <a href="https://unsplash.com/de/@petekasprzyk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Peter Kasprzyk</u></a> auf <a href="https://unsplash.com/de/fotos/person-die-einen-silberfarbenen-ring-tragt-wahrend-sie-eine-prothese-halt-U1gvhqVQ2kQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Vollkeramischer Zahnersatz - Foto von <a href="https://unsplash.com/de/@miracleday?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Elena Mozhvilo</u></a> auf <a href="https://unsplash.com/de/fotos/person-die-silbernes-stahlrohr-halt-YzyvxfzddzA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Professionelle Füllungen und Inlays - Foto von <a href="https://unsplash.com/de/@cristiursea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Cristi Ursea</u></a> auf <a href="https://unsplash.com/de/fotos/eine-nahaufnahme-einer-person-mit-blauen-handschuhen-die-eine-zahnburste-halt-4wrZr7RYyw8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Karriere - Foto von <a href="https://unsplash.com/de/@dentistozkanguner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Ozkan Guner</u></a> auf <a href="https://unsplash.com/de/fotos/ein-zahnarztstuhl-in-einem-raum-mit-einem-gemalde-an-der-wand-aFqSRokmw2E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"><u>Unsplash</u></a></li>
            <li>Icons Unsere Leistungen - <a href="https://www.flaticon.com/free-icons/dentist"><u>Flaticon</u></a></li>
            <li>Kontakt: Telefon - <a href="https://www.flaticon.com/free-icons/phone"><u>Flaticon</u></a></li>
            <li>Kontakt: Standort - <a href="https://www.flaticon.com/free-icons/location"><u>Flaticon</u></a></li>
            <li>Kontakt: E-Mail - <a href="https://www.flaticon.com/free-icons/email"><u>Flaticon</u></a></li>
          </ul>
          <p className="textcard">Alle weiteren Fotos und Illustrationen:<br />©️ Zahnarztpraxis Mohamad Abden</p>
          <p className="textcard">Haftung für Inhalte:<br />Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          <p className="textcard">Urheberrecht:<br />Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          <p className="textcard">Programmierung, Web & SEO:<br />Khaled Bakir</p>
          <p className="textcard">Design:<br /><a href="https://www.rominarauch.com"><u>Romina Rauch</u></a></p>
        </>
      ]
    }
  ],
  previousLink: '',
  nextLink: ''
};

const Impressum = () => <PrivacyLayout {...impressumContent} />;

export default Impressum;
