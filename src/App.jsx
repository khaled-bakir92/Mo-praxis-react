import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import Home from "./components/Home/Home"; 
import Leistungen from "./components/Leistungen/Leistungen"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Karriere from "./components/Karriere/Karriere";  
import Navbar from './components/Navbar/Navbar';
import Fuellung from './components/Leistungen/LeistungSeiten/Fuellung';
import Funktionsdiagnostik from './components/Leistungen/LeistungSeiten/Funktionsdiagnostik';
import Implantologie from './components/Leistungen/LeistungSeiten/Implantologie';
import Parodontitisbehandlung from './components/Leistungen/LeistungSeiten/Parodontitisbehandlung';
import Zahnreinigung from './components/Leistungen/LeistungSeiten/Zahnreinigung';
import VollkeramischerZahnersatz from './components/Leistungen/LeistungSeiten/VollkeramischerZahnersatz';
import Wurzelbehandlung from './components/Leistungen/LeistungSeiten/Wurzelbehandlung';
import ArtztMoh from './components/Teams/ArtztMoh';
import ArtztUlr from './components/Teams/ArtztUlr';
import ScrollToHashElement from './components/ScrollToHashElement'; // Importiere ScrollToHashElement
import ScrollToTop from './components/ScrollToTop'; // Importiere ScrollToTop
import Impressum from "./components/Privacy/Impressum";
import Datenschutz from './components/Privacy/Datenschutz';
const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <ScrollToTop /> {/* ScrollToTop Komponente einfügen */}
        <ScrollToHashElement /> {/* ScrollToHashElement Komponente einfügen */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/fuellung" element={<Fuellung />} />
          <Route path="/funktionsdiagnostik" element={<Funktionsdiagnostik />} />
          <Route path="/implantologie" element={<Implantologie />} />
          <Route path="/parodontitisbehandlung" element={<Parodontitisbehandlung />} />
          <Route path="/zahnreinigung" element={<Zahnreinigung />} />
          <Route path="/vollkeramischerZahnersatz" element={<VollkeramischerZahnersatz />} />
          <Route path="/wurzelbehandlung" element={<Wurzelbehandlung />} />
          <Route path="/lebenslauf" element={<ArtztMoh />} />
          <Route path="/lebenslauf1" element={<ArtztUlr />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;