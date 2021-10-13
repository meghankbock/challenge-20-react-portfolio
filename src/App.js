import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'

function App() {
  const [currentSection, setCurrentSection ] = useState("About Me");
  const [navSections] = useState([
    "About Me",
    "Portfolio",
    "Contact",
    "Resume",
  ]);

  const displaySection = () => {
    if (currentSection == "About Me") {
      return <About />
    } else if (currentSection == "Portfolio") {
      return <Portfolio />
    } else if (currentSection == "Resume") {
      return <Resume />
    } else if (currentSection == "Contact" ) {
      return <Contact />
    } else {
      return <About />
    }

  }
  return (
    <>
    <Header currentSection={currentSection} setCurrentSection={setCurrentSection} navSections={navSections} />
      <main>
        {displaySection()}
      </main>
    <Footer />
    </>
  );
}

export default App;
