import {
  FaCopyright,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
  MdEmail,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/meghankbock/" target="_blank">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/meghankbock" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <h2>Made by Meghan Bock &copy; 2021.</h2>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
