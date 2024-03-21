import { Logo } from "./ui/Logo";
import { Wrapper } from "./ui/Wrapper";
import { User } from "./User";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useCategory } from "../hooks/useCategory";

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
          className="absolute bottom-0 w-full group md:relative md:w-fit"
          onSubmit={onSubmit}
        >
          <input
            id="search"
            type="text"
            placeholder="Search For item"
            className="w-full px-6 py-2 rounded-full outline-none peer bg-app-ash md:bg-transparent md:focus-visible:bg-app-ash"
          ></input>
          <button
            aria-label="search for product"
            className="absolute -translate-y-1/2 right-3 top-1/2 md:hidden md:group-focus-within:block"
            type="submit"
          >
            <Icon icon="mynaui:search" style={{ fontSize: 28 }} />
          </button>
        </form>

        <div className="flex items-center justify-between gap-2 sm:gap-4">
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
  const css = `
                body {
                      overflow: hidden;
                    }
              `;

  const { categories, error, status } = useCategory();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 overflow-y-scroll bg-white md:hidden">
      <nav className="pt-6 min-h-[100vh]">
        <Wrapper>
          <div className="flex items-center justify-between pt-2 pb-6">
            <h2 className="text-2xl font-bold">Categories</h2>
            <button onClick={toggle}>
              <Icon icon="uil:times" style={{ fontSize: 32 }} />
            </button>
          </div>
          {status === "pending" ? (
            "Loading..."
          ) : status === "error" ? (
            `An error has occurred`
          ) : (
            <ul>
              {categories.map(({ name, icon }, index) => (
                <li key={index}>
                  <Link
                    to={`/categories/${encodeURIComponent(name)}`}
                    className="flex items-center gap-3 py-4 hover:text-app-red"
                    onClick={toggle}
                  >
                    <div className="w-8">
                      <img src={icon} alt="" />
                    </div>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Wrapper>
      </nav>
      <style>{css}</style>
    </div>
  );
};

const CartButton = () => {
  const { cart } = useCart();
  return (
    <Link to="/cart" className="relative p-2">
      <Icon icon="bytesize:cart" style={{ fontSize: 32 }} />
      <p className="absolute grid w-4 h-4 text-xs font-bold leading-none text-white rounded-full bg-app-red place-items-center top-1 right-1">
        {cart.length}
      </p>
    </Link>
  );
};
