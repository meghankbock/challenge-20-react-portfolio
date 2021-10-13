const Nav = (props) => {
  const {
    setCurrentSection,
    currentSection,
} = props;

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
                currentSection === section ? "nav-link navActive" : "nav-link"
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
