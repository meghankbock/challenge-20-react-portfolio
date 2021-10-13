import React, { useState } from "react";
import Nav from "../nav";

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
      <div className="header-container">
        <div className="heading">Meghan Bock</div>
        <div className="sub-heading"></div>
      </div>
      <Nav 
      navSections={navSections}
      setCurrentSection={setCurrentSection}
      currentCategory={curr}
      currentSection={props}></Nav>
    </header>
  );
};
