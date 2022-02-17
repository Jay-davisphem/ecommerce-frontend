import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="text-center text-white">
      <div className="container pt-4">
        <div className="flex textcenter justify-center">
          <a
            href="https://linkedin.com/in/davisphem"
            className="mr-9 text-gray-800"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:davidoluwafemi178@gmail.com"
            className="mr-9 text-gray-800"
          >
            <SiGmail />
          </a>
          <a
            href="https://twitter.com/oluw4femi"
            className="mr-9 text-gray-800"
          >
            <FaTwitter />
          </a>
          <a className="mr-9 text-gray-800" href="tel:+2348116585993">
            <FiPhoneCall />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-700 p-4">
        © 2022 Copyright: Made with &#x1f339; by
        <a
          className="text-gray-800"
          href="https://github.com/jay-davisphem.com/"
        >
          &nbsp; daviSPhem
        </a>
      </div>
    </footer>
  );
};
export default Footer;
