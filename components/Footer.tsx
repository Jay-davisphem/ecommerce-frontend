import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bottom-0 text-center text-white">
      <div className="container pt-4">
        <div className="flex textcenter justify-center ml-12">
          <a
            href="https://linkedin.com/in/davisphem"
            className="mr-9 text-blue"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:davidoluwafemi178@gmail.com"
            className="mr-9 text-blue"
          >
            <SiGmail />
          </a>
          <a href="https://twitter.com/oluw4femi" className="mr-9 text-blue">
            <FaTwitter />
          </a>
          <a className="mr-9 text-blue" href="tel:+2348116585993">
            <FiPhoneCall />
          </a>
        </div>
      </div>

      <div className="text-center text-blue p-4">
        © 2022 Copyright: Made with{" "}
        <span className="text-[red]">&#x1f339;</span> by
        <a className="text-blue" href="https://github.com/jay-davisphem.com/">
          &nbsp; daviSPhem
        </a>
      </div>
    </footer>
  );
};
export default Footer;
