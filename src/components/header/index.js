import Nav from "../Nav";

const Header = (props) => {

  return (
    <header>
      <section className="header-container">
        <h1 className="heading">Meghan Bock</h1>
        <h2 className="sub-heading"></h2>
      </section>
      <Nav
        navSections={props.navSections}
        setCurrentSection={props.setCurrentSection}
        currentSection={props.currentSection}
      ></Nav>
    </header>
  );
};

export default Header;
