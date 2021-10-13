import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection ] = useState("");
  const [navSections] = useState([
    "About Me",
    "Portfolio",
    "Contact",
    "Resume",
  ]);

  const displaySection = () => {
    if (currentSection === "About Me") {
      console.log("current state: ", currentSection);
      return <About />
    } else if (currentSection === "Portfolio") {
      console.log("current state: ", currentSection);
      return <Portfolio />
    } else if (currentSection === "Resume") {
      console.log("current state: ", currentSection);
      return <Resume />
    } else if (currentSection === "Contact" ) {
      console.log("current state: ", currentSection);
      return <Contact />
    } else {
      console.log("current state: ", currentSection);
      return <About />
    }

  }
  return (
    <main className="content">
    <Header currentSection={currentSection} setCurrentSection={setCurrentSection} navSections={navSections} />
        {displaySection()}
    <Footer />
    </main>
  );
}

export default App;
