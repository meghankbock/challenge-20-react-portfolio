const Nav = (props) => {
  const { navSections, setCurrentSection, currentSection } = props;

  return (
    <nav>
      <ul className="nav-container">
        {navSections.map((section) => (
          <li className="nav-item" key={section}>
            <a
              href={"#" & section.toLowerCase()}
              onClick={() => {
                setCurrentSection(section);
              }}
              className={
                currentSection === section ? "nav-link nav-active" : "nav-link"
              }
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
