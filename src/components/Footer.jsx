import { Link } from "react-router-dom";
import { Logo } from "./ui/Logo";
import { Wrapper } from "./ui/Wrapper";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-black py-6 mt-auto">
      <Wrapper>
        <div className="grid justify-between gap-y-6 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-12 md:grid-rows-1">
          <div className="flex justify-center sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2 md:justify-start">
            <Logo stack="vertical" size="lg" />
          </div>

          <div className="flex flex-col sm:text-right sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-2">
            <h2 className="text-lg font-bold text-white text-center md:text-right">
              Important Links
            </h2>
            <ul className="text-app-ash-2 mt-4 text-center md:text-right">
              <li>
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Contact US
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/"
                  className="w-full py-2 inline-block hover:text-app-red"
                >
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-1 md:text-right">
            <h2 className="text-lg font-bold text-white text-center md:text-left">
              Socials
            </h2>
            <ul className="flex text-app-ash-2 justify-center gap-3 mt-4 md:justify-start">
              <li>
                <Link
                  to="/"
                  className="p-1 inline-block hover:scale-105 hover:text-app-red"
                  aria-label="link to Mkhasa instagram page"
                >
                  <Icon icon="mdi:instagram" style={{ fontSize: 32 }} />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa X (formerly known as twitter) page"
                >
                  <Icon
                    icon="bi:twitter-x"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa meta (formaerly known as facebook) page"
                >
                  <Icon
                    icon="lucide:facebook"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="p-1 inline-block hover:scale-105"
                  aria-label="link to Mkhasa youtube page"
                >
                  <Icon
                    icon="ant-design:youtube-outlined"
                    style={{ fontSize: 32 }}
                    className="hover:text-app-red"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-app-ash-2 text-sm text-center pt-10 sm:text-right">
          &copy; {new Date().getFullYear()} All Rights reserved
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
