import { useState } from "react";
import userIcon from "../assets/images/accounticon.svg";
import angleDownIcon from "../assets/images/accounttoggleicon.svg";
import { Button } from "./Button";
import { Logout } from "./Logout";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const User = () => {
  // const { user } = useAuth();
  const user = { email: "chis", username: "ugyuggyguun" };
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand((v) => !v);
  };
  return (
    <div className="relative">
      <Button className="bg-app-ash text-nowrap" onClick={toggle}>
        <div className="flex items-center gap-4">
          <img src={userIcon} alt="" />
          <p className="leading-none hidden md:block">My Account</p>
          <img
            src={angleDownIcon}
            alt=""
            className={`${expand ? "rotate-180" : ""}`}
          />
        </div>
      </Button>
      <div
        className={`absolute min-w-full right-0 pb-6 pt-3 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] ${
          expand ? "" : "hidden"
        }`}
      >
        {user ? (
          <>
            <h2 className="pb-4 font-bold font-fuzzy text-xl tracking-tight capitalize">
              {user?.username}
            </h2>

            <Logout />
          </>
        ) : (
          <Link to="/login">
            <Button className="text-app-red font-bold bg-app-ash w-full text-nowrap">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
