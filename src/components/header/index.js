import React, { useState } from "react";
import Nav from "../Nav";

const Header = (props) => {
const [currentSection, setCurrentSection] = useState(navSections[0]);
const { navSections, currentSection, setCurrentSection } = props;

  return (
    <header>
      <section className="header-container">
        <h1 className="heading">Meghan Bock</h1>
        <h2 className="sub-heading"></h2>
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
