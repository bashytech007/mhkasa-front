import { Logo } from "./Logo";
import { Wrapper } from "./Wrapper";
import { User } from "./User";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import rollon from "../assets/images/rollon.svg";
import humidifier from "../assets/images/humidifier.svg";
import solar_perfumeoutline from "../assets/images/solar_perfume-outline.svg";
import ph_drop from "../assets/images/ph_drop.svg";
import aroma from "../assets/images/aroma.svg";
import freshner from "../assets/images/freshener.svg";
import deodorant from "../assets/images/deodorant.png";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand((v) => !v);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target?.search?.value;
    if (!value) return;
    alert(value);
  };

  return (
    <Wrapper className="py-4">
      <nav className="relative flex items-center justify-between gap-x-8 pb-[56px] md:pb-0">
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="md:hidden">
            <Icon icon="charm:menu-hamburger" style={{ fontSize: 36 }} />
          </button>
          <Logo />
        </div>

        <form
          className="absolute group w-full bottom-0 md:relative md:w-fit"
          onSubmit={onSubmit}
        >
          <input
            id="search"
            type="text"
            placeholder="Search For item"
            className="peer rounded-full px-6 py-2 w-full bg-app-ash  outline-none md:bg-transparent md:focus-visible:bg-app-ash"
          ></input>
          <button
            aria-label="search for product"
            className="absolute right-3 top-1/2 -translate-y-1/2 md:hidden md:group-focus-within:block"
            type="submit"
          >
            <Icon icon="mynaui:search" style={{ fontSize: 28 }} />
          </button>
        </form>

        <div className="flex items-center justify-between gap-4">
          <CartButton />
          <User />
        </div>
      </nav>
      {expand && <MobileNavbar toggle={toggle} />}
    </Wrapper>
  );
};

export default Navbar;

const MobileNavbar = ({ toggle }) => {
  const categories = [
    {
      category: "Perfume",
      icon: solar_perfumeoutline,
    },
    {
      category: "Perfume Oil",
      icon: ph_drop,
    },
    {
      category: "Body Spray",
      icon: deodorant,
    },
    {
      category: "Reed Diffuser",
      icon: aroma,
    },
    {
      category: "Roll On",
      icon: rollon,
    },
    {
      category: "Humidifier",
      icon: humidifier,
    },
    {
      category: "Air Freshner",
      icon: freshner,
    },
    {
      category: "Body Mist",
      icon: deodorant,
    },
  ];

  return (
    <div className="bg-white fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-scroll md:hidden">
      <nav className="pt-6">
        <Wrapper>
          <div className="flex items-center justify-between pt-2 pb-6">
            <h2 className="font-bold text-2xl">Categories</h2>
            <button onClick={toggle}>
              <Icon icon="uil:times" style={{ fontSize: 32 }} />
            </button>
          </div>
          <ul>
            {categories.map(({ category, icon }, index) => (
              <li key={index}>
                <Link
                  to={`/categories/${encodeURIComponent(
                    category.toLowerCase()
                  )}`}
                  className="flex items-center gap-3 py-4"
                >
                  <div className="w-8">
                    <img src={icon} alt="" />
                  </div>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      </nav>
    </div>
  );
};

const CartButton = ({ numberOfItems = 0 }) => {
  return (
    <button className="p-2 relative">
      <Icon icon="bytesize:cart" style={{ fontSize: 32 }} />
      <p className="absolute w-4 h-4 bg-app-red text-sm leading-none grid place-items-center text-white font-bold rounded-full top-1 right-1">
        {numberOfItems}
      </p>
    </button>
  );
};
