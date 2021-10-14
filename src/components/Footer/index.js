import { 
  FaCopyright,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
  MdEmail
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/meghankbock/" target="_blank">
                      <FaLinkedin size={30}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/meghankbock" target="_blank">
                      <FaGithub size={30}/>
                    </a>
                </li>
                <li>
                <h2>Made by Meghan Bock &copy; 2021.</h2>
                </li>
            </ul>
    </footer>
  );
};

export default Footer;
