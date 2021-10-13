import React, { useState } from "react";
import Nav from "../Nav";

const Header = (props) => {
  const [navSections] = useState([
    "About me",
    "Portfolio",
    "Contact",
    "Resume",
  ]);
  const [currentSection, setCurrentSection] = useState(navSections[0]);

  return (
    <header>
      <section className="header-container">
        <div className="heading">Meghan Bock</div>
        <div className="sub-heading"></div>
      </section>
      <Nav
        navSections={navSections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Nav>
    </header>
  );
};

export default Header;
