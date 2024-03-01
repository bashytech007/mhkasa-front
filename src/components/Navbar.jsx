import cartIcon from "../assets/images/shopping-cart.svg";
import userIcon from "../assets/images/accounticon.svg";
import angleDownIcon from "../assets/images/accounttoggleicon.svg";
import { Logo } from "./Logo";
import { Wrapper } from "./Wrapper";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <Wrapper className="py-4">
      <nav className="flex items-center justify-between font-monteserrat">
        <Logo collapse />
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search For item"
            className="rounded-full px-6 py-1"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <CartButton />

          <Button className="bg-app-ash">
            <div className="flex items-center gap-4">
              <img src={userIcon} alt="" />
              <p className="leading-none hidden md:block">My Account</p>
              <img src={angleDownIcon} alt="" />
            </div>
          </Button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const CartButton = ({ numberOfItems = 0 }) => {
  return (
    <button className="p-2 relative">
      <img src={cartIcon} alt="cart" className="cursor-pointer" />
      <p className="absolute w-4 h-4 bg-app-red text-sm leading-none grid place-items-center text-white font-bold rounded-full top-0 right-0">
        {numberOfItems}
      </p>
    </button>
  );
};
