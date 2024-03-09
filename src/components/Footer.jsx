import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Wrapper } from "./Wrapper";

export const Footer = () => {
  return (
    <footer className="bg-black py-6 mt-auto">
      <Wrapper>
        <div className="grid justify-between gap-6 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-1">
          <div className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
            <Logo stack="vertical" size="lg" />
          </div>

          <div className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 sm:text-right md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
            <h2 className="text-lg font-bold text-white">Important Links</h2>
            <ul className="flex flex-col text-app-ash-2 gap-2 mt-4 italic">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact US</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Terms of service</Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:text-right">
            <h2 className="text-lg font-bold text-white">Socials</h2>
            <ul className="flex text-app-ash-2 gap-3 mt-4 md:justify-end">
              <li>
                <Link to="/">Us</Link>
              </li>
              <li>
                <Link to="/">US</Link>
              </li>
              <li>
                <Link to="/">Policy</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-app-ash-2 text-sm sm:text-right">
          &copy; {new Date().getFullYear()} All Rights reserved
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
