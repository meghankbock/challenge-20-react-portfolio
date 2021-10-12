const Nav = () => {
  const navSections = ["About me", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul className="nav-container">
        {navSections.map((section) => (
          <li className="nav-item" key={section}>
            <a
              href={"#" & section.toLowerCase()}
              onClick={() => {
                renderPage(section);
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
