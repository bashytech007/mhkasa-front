import logo from "../assets/images/mhkasa-logo.svg";
import cartlogo from "../assets/images/shopping-cart.svg";
import accountlogo from "../assets/images/accounticon.svg";
import accounttoggle from "../assets/images/accounttoggleicon.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-[90%] px-8 h-14 mx-auto">
        <div className="">
          <a href="#">
            <img src={logo} alt="mhkasa-logo" className="w-40" />
          </a>
        </div>
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search For item"
            className="outline-none text-sm"
          />
        </div>
        <div className="flex items-end justify-between gap-4">
          <img src={cartlogo} alt="cart" className="cursor-pointer" />
          <img src={accountlogo} alt="accountlogo" className="cursor-pointer" />
          <span className="hidden md:block">My Account</span>
          <img
            src={accounttoggle}
            alt="menu"
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="px-4 py-2 md:hidden">
          <span>My Account</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
